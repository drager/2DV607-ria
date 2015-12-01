/**
 * Created by dav on 2015-12-01.
 */
import { ProgressBar } from 'react-mdl';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class SpinnerComponent extends Component{

    render(){
        return (
            <div>
                {this.props.spinner.spinning ? (

                    <ProgressBar indeterminate style= {{ margin: '0 auto'}} />
                ) : (
                        null
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        spinner: state.spinner
    }
};

export default connect(mapStateToProps)(SpinnerComponent);