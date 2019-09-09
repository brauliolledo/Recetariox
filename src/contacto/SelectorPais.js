import React, { PureComponent } from 'react';
import $ from 'jquery';
import './selectize.bootstrap4.css'
require('selectize');

export class SelectorPais extends PureComponent {       
    componentDidMount() {
        $('#seleccionarPaisInput').selectize(
            {
                sortField: 'name',
                maxItems: 1,
                labelField: 'name',
                valueField : 'alpha2Code',
                searchField: 'name',
                selectOnTab: true,
                openOnFocus: false,
                maxOptions : 10,
                create : false,
                load : (query, callback) =>
                {
                    if(query.length < 2) return callback();
    
                    $.ajax(
                        {
                            url: 'https://restcountries.eu/rest/v2/all',
                            success : (arrayPaises) =>
                            {
                                callback(arrayPaises)
                            },
                            error: (error) => {
                                callback();
                            }
                        }
                    )
                }
            }
        )
    }

    render() {
        return (
            <input class="form-control" id="seleccionarPaisInput"></input>
        )
    }
}