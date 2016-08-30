import React, { PropTypes } from 'react';
import Button from './Button';

export default function ShortcutButton(props) {
    return <Button {...props} buttonType="shortcut">
                {props.children}
            </Button>;
}

ShortcutButton.propTypes = {
    children: PropTypes.node
};
