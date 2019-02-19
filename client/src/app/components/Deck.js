import React, { Component } from 'react'
import { isAMatch, flipCard, getDeck } from '../redux/actions/matchio_act'
import { connect } from 'react-redux';
import Card from './Card'


class Deck extends Component {
  state = {
    deck: [],
    flipped: {},
    winner:false
  }
  componentDidMount() {
    this.props.getDeck()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.deck.length) {
      this.setState((prevState) => ({
        ...nextProps.game
      }))
    }
  }

  onClick(card) {
    this.props.flipCard(card, this.state)
    this.props.isAMatch(card, this.state)
  }

  render() {
    const { deck, winner } = this.state;
    // console.log('state',this.state);
    return (
      <div className='mPad'>
        {
          deck.map((crd, i, r) => {
            return <Card key={i} card={crd} winner={winner}
              onClick={this.onClick.bind(this, crd)} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  game: state.game,
});


export default connect(mapStateToProps, { isAMatch, flipCard, getDeck })(Deck);
