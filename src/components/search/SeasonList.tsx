import * as React from 'react';
import {List, ListItem, Button} from 'semantic-ui-react';
import {MonthList, Month} from '../../model/MomentExtension';

export const SeasonList = () => (
    <List>
        {MonthList.map(m => <Button key={m}> {Month[m]} </Button>)}
    </List>
);

