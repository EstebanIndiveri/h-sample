import React from 'react';
import AppRouter from '../../routes/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
const { mount } = require("enzyme");

    describe('Pruebas en <AppRouter/>', () => {
        
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:false
            }
        }

        test('debe de mostrar el login si no esta auth ', () => {

           const wrapper=mount(
                                <AuthContext.Provider value={contextValue}>
                                    <AppRouter/>
                                </AuthContext.Provider>
           );
           expect(wrapper).toMatchSnapshot();
        });

        test('debe mostrar el MarvelScreen si esta auth', () => {
            const contextValue={
                dispatch:jest.fn(),
                user:{
                    logged:true,
                    name:'esteban'
                }
            }
            const wrapper=mount(
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            );
            expect(wrapper.find('.navbar').exists()).toBe(true);
        })
        
        
    })
    