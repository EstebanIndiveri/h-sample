import React from 'react';
import { shallow, mount } from 'enzyme';
import PrivateRoute from '../../routes/PrivateRoute';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
    describe('pruebas en <PrivateRoute/>', () => {

        const props={
            location:{
                pathname:'/marvel'
            }
        }

        Storage.prototype.setItem=jest.fn();

        test('si esta auth y save local', () => {

            const wrapper=mount(
                                <MemoryRouter>
                                    <PrivateRoute
                                    isAuthenticated={true}
                                    component={()=>(<span>listo</span>)}
                                    {...props}
                                        />
                                </MemoryRouter>
                                );

            expect(wrapper.find('span').exists()).toBe(true);
            expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');

        });

        test('bloquear el componente si no esta auth', () => {
            const wrapper=mount(
                <MemoryRouter>
                    <PrivateRoute
                    isAuthenticated={false}
                    component={()=>(<span>listo</span>)}
                    {...props}
                        />
                </MemoryRouter>
                );

            expect(wrapper.find('span').exists()).toBe(false);
        })
        
        
    })
    