import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttons({ categories, onClick }) {
    return (
        <ButtonGroup
            color='secondary'
            aria-label='medium secondary button group'>
            {categories.map((category) => (
                <Button onClick={() => onClick(category)}>
                    {category.label}
                </Button>
            ))}
        </ButtonGroup>
    );
}
