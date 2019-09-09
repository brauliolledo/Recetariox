import Autosuggest from 'react-autosuggest';
import $ from 'jquery';
import React, {PureComponent} from 'react';
import './SelectorDePais.css'

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function getSuggestions(value) {

  const regex = new RegExp('^' + value, 'i');

  let paises = await new Promise((resolve, reject) => {
    $.ajax(
      {
        url: 'https://restcountries.eu/rest/v2/all',
        success: (respuesta) => {
          resolve(respuesta)
        },
        error: (error) => {
          reject();
        }
      }
    )
  });

  return paises.filter(pais => regex.test(pais.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <div>{suggestion.name}</div>
  );
}

export class SelectorDePais extends PureComponent {
   constructor() {
    super()
    this.state = { value: '', suggestions: [] }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue });
  }
  
  onSuggestionsFetchRequested = async ({ value }) => {
    let data = await getSuggestions(value);

    this.setState({ suggestions: data });
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "País",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}
