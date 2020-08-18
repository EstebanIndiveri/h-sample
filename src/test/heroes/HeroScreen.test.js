import React from 'react';
import {mount,shallow} from 'enzyme';
import '@testing-library/jest-dom';
import HeroScreen from '../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';

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
                <MemoryRouter initialEntries={['/hero/dc-green']}>
                    <HeroScreen history={historyMock}/>
                </MemoryRouter>
            );
        })
        

        
    });
    