import React from 'react';
import {mount}from 'enzyme';
import SearchScreen from '../../components/search/SearchScreen';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';

    describe('pruebas en <SearchScreen/>', () => {

        test('mostrar con default values ', () => {
            const wrapper=mount(
                        <MemoryRouter initialEntries={['/search']}>
                            <Route path='/search' component={SearchScreen}>
                            </Route>
                        </MemoryRouter>
                        );
                        
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
        });
       test('valida values en el input con el valor de queryString', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen}>
                </Route>
            </MemoryRouter>
            );
            expect(wrapper.find('input').prop('value')).toBe('batman');
            expect(wrapper).toMatchSnapshot();
       });
    
       test('debe de mostrar un error si no se encuentra el Hero', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path='/search' component={SearchScreen}>
                </Route>
            </MemoryRouter>
            );
            expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a Hero with  batman123');
            expect(wrapper).toMatchSnapshot();
       });
       test('debe de llamar el push del histoy', () => {
           const history={
               push:jest.fn()
           };
           const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                path='/search' 
                component={(props)=><SearchScreen history={history}/>}>
                </Route>
            </MemoryRouter>
            );
            wrapper.find('input').simulate('change',{
                target:{
                    name:'name',
                    value:'batman'
                }
            });
            wrapper.find('form').prop('onSubmit')({
                preventDefault(){}
            });
            expect(history.push).toHaveBeenCalledWith('?q=batman');
       });
       
       
    });
    