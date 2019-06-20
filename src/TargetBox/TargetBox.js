import React from 'react';
import PropTypes from 'prop-types';

import Point from "../Point/Point";
import Target from "../Target/Target";
import TargetMath from "../Target/TargetMath";
import './TargetBox.css';

const TARGET_DEFAULT_RADIUS = 100;
const TARGET_BOX_DEFAULT_PADDING = 20;

class TargetBox extends React.Component {
    constructor(props) {
        super(props);

        this.radius = Math.abs(this.props.radius);
        this.boxSize = this.radius * 2 + Math.abs(this.props.padding);
        let pointCenter = new Point(this.boxSize / 2, this.boxSize / 2);
        this.targetMath = new TargetMath(pointCenter, this.radius);

        let defautlPosition = new Point(0, 0);
        this.props.setInfo(this.getInfo(defautlPosition));
    }

    onMouseMove(e) {
        let rect = e.currentTarget.getBoundingClientRect();
        let newPosition = new Point(e.clientX - rect.left, e.clientY - rect.top);
        this.props.setInfo(this.getInfo(newPosition));
    }

    getInfo(position) {
        return {
            position,
            isInTarget: this.targetMath.isShootInTarget(position),
        };
    }

    render() {
        return (
            <div className="TargetBox" onMouseMove={this.onMouseMove.bind(this)}
                 style={{width: this.boxSize, height: this.boxSize}}>
                <Target radius={this.radius}/>
            </div>
        );
    }
}

TargetBox.propTypes = {
    radius: PropTypes.number,
    padding: PropTypes.number,
    setInfo: PropTypes.func,
};

TargetBox.defaultProps = {
    radius: TARGET_DEFAULT_RADIUS,
    padding: TARGET_BOX_DEFAULT_PADDING,
    setInfo: function () {
    },
};

export default TargetBox;

