import React from 'react';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routes/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
    describe('<DashboardRoute/>', () => {
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'esteban'
            }
        }
        test('match con Snapshot', () => {
            const wrapper=mount(
                <AuthContext.Provider value={contextValue}>
                    <MemoryRouter>
                        <DashboardRoutes/>
                    </MemoryRouter>
                </AuthContext.Provider>
            );
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Bienvenido esteban');
        });
    })
    