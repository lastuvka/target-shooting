import React from 'react';
import Point from "./Point";
import Target from "./Target";
import TargetMath from "./TargetMath";
import './TargetBox.css';

const TARGET_CENTER = new Point(150, 150);
const TARGET_RADIUS = 100;


class TargetBox extends React.Component {
    constructor(props) {
        super(props);
        this.targetMath = new TargetMath(TARGET_CENTER, TARGET_RADIUS);
        let defautlPosition = new Point(0, 0);
        this.state = {
            position: defautlPosition,
            isInTarget: this.targetMath.isShootInTarget(defautlPosition),
        };
    }

    onMouseMove(e) {
        let rect = e.currentTarget.getBoundingClientRect();
        let newPosition = new Point(e.clientX - rect.left, e.clientY - rect.top);

        this.props.setInfo({
            position: newPosition,
            isInTarget: this.targetMath.isShootInTarget(newPosition),
        });
    }

    render() {
        return (
            <div className="TargetBox" onMouseMove={this.onMouseMove.bind(this)}>
                <Target center={TARGET_CENTER} radius={TARGET_RADIUS}/>
            </div>
        );
    }
}

export default TargetBox;
