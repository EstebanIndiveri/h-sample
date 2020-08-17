// import React from 'react';
import '@testing-library/jest-dom'
import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';
    describe('Pruebas en authReducer/>', () => {
        
        test('retorna estado por default', () => {
            const state=authReducer({logged:false},{});
            expect(state).toEqual({logged:false});
        });

        test('autentica y coloca el name del usuario ', () => {
            // const state={
            //     name:'fer',
            //     logged:true
            // }
            const action={
                type:types.login,
                payload:{
                    name:'esteban'
                }
            }
            const state=authReducer({logged:false},action);
            expect(state).toEqual({logged:true,name:'esteban'});
        });

        test('debe de borrar el name del usuario y logged=false', () => {
            const action={
                type:types.logout,
            }
            const state=authReducer({logged:true,name:'esteban'},action);
            expect(state).toEqual({logged:false});
        })
        
        
        
    })
    