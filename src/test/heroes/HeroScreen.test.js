import React from 'react';
import {mount,shallow} from 'enzyme';
import '@testing-library/jest-dom';
import HeroScreen from '../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

    describe('Pruebas en HeroScree/>', () => {

        const historyMock={
            length:10,
            push:jest.fn(),
            goBack:jest.fn()
        }

       

        test('componente redirect sin hero ', () => {
            const wrapper=mount(
                <MemoryRouter initialEntries={['/hero']}>
                    <HeroScreen history={historyMock}/>
                </MemoryRouter>
            );
            expect(wrapper.find('Redirect').exists()).toBe(true);
        });

        test('muestra el hero ssi el param exist', () => {

            const wrapper=mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route path="/hero/:heroeId" component={HeroScreen}/>
                </MemoryRouter>
            );
            expect(wrapper.find('.row').exists()).toBe(true);
        });

        test('regresa a la pantalla anterior con history.PUSH', () => {
            const historyMock={
                length:1,
                push:jest.fn(),
                goBack:jest.fn()
            }
            const wrapper=mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={(props)=><HeroScreen history={historyMock}/>}/>
                </MemoryRouter>
            );
            wrapper.find('button').prop('onClick')();
            expect(historyMock.push).toHaveBeenCalledWith('/');
            expect(historyMock.goBack).not.toHaveBeenCalled();
        });
        test('regresa a la pantalla anterior GoBack', () => {

            const wrapper=mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={(props)=><HeroScreen history={historyMock}/>}/>
                </MemoryRouter>
            );
            wrapper.find('button').prop('onClick')();
            expect(historyMock.push).toHaveBeenCalledTimes(0);
            expect(historyMock.goBack).toHaveBeenCalled();
        });
        test('param mal REDICERT', () => {
            

            const wrapper=mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={(props)=><HeroScreen history={historyMock}/>}/>
                </MemoryRouter>
            );
                expect(wrapper.text()).toBe('');
        });
        
        

        
    });
    