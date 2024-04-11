import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.tsx';

it('renders the form correctly', () => {
    const handleClick = jest.fn();
    render(<Form title="Backlog" data={[]} handleClick={handleClick} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

it('allows adding a task in Backlog mode', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Form title="Backlog" data={[]} handleClick={handleClick} />);

    await user.type(screen.getByRole('textbox'), 'New Task');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(handleClick).toHaveBeenCalled();
});

it('allows selecting a task when not in Backlog mode', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const selectData = [{ id: 1, title: 'Task 1', description: '' }];
    render(<Form title="Not Backlog" data={[]} selectData={selectData} handleClick={handleClick} />);

    await user.click(screen.getByText('Task 1'));
    expect(handleClick).toHaveBeenCalledWith([]);
});

it('toggles the dropdown on click', async () => {
    const user = userEvent.setup();
    render(<Form title="Not Backlog" data={[]} selectData={[]} handleClick={() => { }} />);

    expect(screen.queryByText('Select Task')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Select Task')).toBeInTheDocument(); 
});