import * as React from "react";

type Props = {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    readOnly?: boolean;
};

export class TextInput extends React.Component<Props> {
    render() {
        return (
            <div>
                <input
                    type={this.props.type || "text"}
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                    placeholder={this.props.placeholder}
                    readOnly={this.props.readOnly}
                />
                <label>{this.props.label}</label>
            </div>
        );
    }
}
