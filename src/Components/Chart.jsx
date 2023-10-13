
import * as React from 'react';

import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts';

const data = [
    { value: 40, label: 'Male', color: '#ff823c' },
    { value: 35, label: 'Female', color: '#0096ff' },
    { value: 25, label: 'Unknown' ,color: '#323c46' },
    
];

const size = {
    width: 520,
    height: 390,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 25,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function PieChartWithCenterLabel() {
    return (
        <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
            
        </PieChart>
    );
}