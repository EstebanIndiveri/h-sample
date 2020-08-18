import React from 'react';
import '@testing-library/jest-dom'
import LoginScreen from '../../components/login/LoginScreen';
import{shallow, mount} from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

    describe('Prueba en Login Screen', () => {
        const history={
            replace:jest.fn(),
        }
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'esteban'
            }
        }
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
            </AuthContext.Provider> 
        )
        test('match con el SnapShot', () => {
            expect(wrapper).toMatchSnapshot();
        });
        test('dispatch y navegación', () => {
            // const wrapper=mount(<LoginScreen/>)
            const handleClick=wrapper.find('button').prop('onClick');
            handleClick();
            expect(contextValue.dispatch).toHaveBeenCalledWith({
                type:types.login,
                payload:{
                    name:'Esteban'
                }
            });
            expect(history.replace).toHaveBeenCalledWith('/');
            localStorage.setItem('lastPath','/dc');
            handleClick();
            expect(history.replace).toHaveBeenCalledWith('/dc');
        });
    });
    