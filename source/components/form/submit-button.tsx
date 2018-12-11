import * as React from "react";

type Props = {
    label: string;
    onClick: () => void;
};

export class SubmitButton extends React.PureComponent<Props> {
    private onClick = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.props.onClick();
    };

    render() {
        return (
            <input
                type="submit"
                value={this.props.label}
                onClick={this.onClick}
            />
        );
    }
}
