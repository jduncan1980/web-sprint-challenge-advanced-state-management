import React from 'react';
import {
	render,
	cleanup,
	// fireEvent,
	// waitFor,
	act,
} from '@testing-library/react';
import AddSmurfForm from './AddSmurfForm';

afterEach(() => {
	cleanup();
});

test('renders without crashing', async () => {
	await act(async () => {
		const { asFragment } = render(<AddSmurfForm />);
		expect(asFragment()).toMatchSnapshot();
	});
});

test('renders name field', async () => {
	await act(async () => {
		const { getByTestId } = render(<AddSmurfForm />);

		getByTestId('smurf-name');
	});
});

test('renders age field', async () => {
	await act(async () => {
		const { getByTestId } = render(<AddSmurfForm />);

		getByTestId('smurf-age');
	});
});

test('renders height field', async () => {
	await act(async () => {
		const { getByTestId } = render(<AddSmurfForm />);

		getByTestId('smurf-height');
	});
});
