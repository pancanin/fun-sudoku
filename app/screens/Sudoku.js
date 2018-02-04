import React from 'react'
import {Text} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import sudokuGenerator from '../lib/sudokuGenerator'
import * as _ from 'lodash'
import SudokuField from '../components/SudokuField'

class Sudoku extends React.Component {
  componentWillMount() {
    this.props.setSudokuField(_.chunk(sudokuGenerator.generateSudoku().map(sq => sq.Value), 9))
  }

  render () {
    return (
      <SudokuField fullSudokuField={this.props.fullSudokuField} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    fullSudokuField: state.reducer.fullSudokuField
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);