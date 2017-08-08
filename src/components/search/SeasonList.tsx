import * as React from 'react';
import {List, Button} from 'semantic-ui-react';
import {MonthList, Month} from '../../model/MomentExtension';
import * as moment from "moment";

const currentMonth = moment().month();


// TODO regroup by season ? nice way to display it ?
export const SeasonList = () => (
    <List horizontal>
        {MonthList.map(m => <List.Item key={m}><Button > {Month[m]} </Button></List.Item>)}
    </List>
);

