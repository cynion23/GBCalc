import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl,ControlLabel,Button } from 'react-bootstrap';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                totalFP: 0,
                totalDonatedOverall: 0,
                totalSelf: 0,
                totalCurrentSpot: 0,
                fpReward: 0,
                ARCBoost: 80,
                output_totalToLock: 0,
                output_totalFPRewards: 0,
                output_totalProfit: 0
            }
    }
    onClick() {
        var totalRemaining = this.state.totalFP - this.state.totalDonatedOverall;
        console.log(totalRemaining);
        totalRemaining += (+this.state.totalSelf);
        console.log(totalRemaining);
        totalRemaining += (+this.state.totalCurrentSpot);
        console.log(totalRemaining);
        console.log("Total FP Required to lock: " + totalRemaining / 2);

        var totalToLock = Math.round(totalRemaining / 2);
        var totalProfit = Math.round((+this.state.fpReward * (1 + ((+this.state.ARCBoost) * .01))));
        this.setState(
            {
                output_totalToLock: totalToLock,
                output_totalFPRewards: totalProfit,
                output_totalProfit: totalProfit - totalToLock
            })
    }
    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3 text-center">
                            <h2>FOE GB Calculator</h2>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3 text-center">
                            <FormGroup>
                                <ControlLabel>Total FP for GB Level</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ totalFP: event.target.value })} value={this.state.totalFP} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Total FP donated to GB level</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ totalDonatedOverall: event.target.value })} value={this.state.totalDonatedOverall} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Total FP you've donated so far</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ totalSelf: event.target.value })} value={this.state.totalSelf} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Total FP donated by person currently in spot if its not you</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ totalCurrentSpot: event.target.value })} value={this.state.totalCurrentSpot} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>FP Reward</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ fpReward: event.target.value })} value={this.state.fpReward} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>ARC Boost</ControlLabel>
                                <FormControl type="number" onChange={(event) => this.setState({ ARCBoost: event.target.value })} value={this.state.ARCBoost} />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <div className="btn-group" data-toggle="buttons">
                                <Button type="submit" onClick={() => this.onClick()}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3" />
                        <FormGroup className="col-md-4 col-lg-4 col-xl-4">
                            <ControlLabel>Total to Lock: {this.state.output_totalToLock}</ControlLabel><br/>
                            <ControlLabel>Total FP Earned: {this.state.output_totalFPRewards}</ControlLabel><br/>
                            <ControlLabel>Total Profit: {this.state.output_totalProfit}</ControlLabel>
                        </FormGroup>
                    </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("container"));