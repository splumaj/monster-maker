import styled from 'styled-components';

export const CardWrapper = styled.div`
    font-family: arial;
    font-size: 8pt;
    width: 350px;
    line-height: 10.5pt;

    /* For ease of development. Remove when finished. */
    margin: 0 auto;
    margin-top: 100px;
`;

export const TitleBlock = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 8px;
    grid-template-areas:
        'monsterName monsterRole'
        'monsterType experiencePoints';
    background-color: #506050;
    color: #fff;
    padding: 2px 5px 0 8px;
    height: 28px;
`;

export const MonsterName = styled.div`
    grid-area: monsterName;
    font-weight: bold;
`;

export const MonsterRole = styled.div`
    grid-area: monsterRole;
    justify-self: end;
    font-weight: bold;
`;

export const MonsterType = styled.div`
    grid-area: monsterType;
    font-size: 7pt;
`;

export const ExperiencePoints = styled.div`
    grid-area: experiencePoints
    justify-self: end;
    font-size: 7pt;
`;

export const StatBlock = styled.div`
    display: grid;
    grid-template-columns: 8fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-column-gap: 8px;
    grid-template-areas:
        'hitPoints initiative'
        'defenses senses'
        'movement extraSenses'
        'savingThrows savingThrows';
  background-color: #ddddcc;  
  padding: 0 5px 0 8px;
`;

export const HitPoints = styled.div`
    grid-area: hitPoints;
`;

export const Initiative = styled.div`
    grid-area: initiative;
    justify-self: end;
`;

export const Defenses = styled.div`
    grid-area: defenses;
`;

export const Senses = styled.div`
    grid-area: senses;
    justify-self: end;
`;

export const Movement = styled.div`
    grid-area: movement;
`;

export const ExtraSenses = styled.div`
    grid-area: extraSenses;
    justify-self: end;
`;

export const SavingThrows = styled.div`
    grid-area: savingThrows;
`;

export const Label = styled.span`
    font-weight: bold;
`;

export const ActionBlock = styled.div`
    background-color: #ddddcc;
`;

export const ActionTitle = styled.div`
    color: #fff;
    background-color: #4d5e40;
    padding: 0 5px 0 8px;
`;

export const ActionNameBlock = styled.div`
    background-color: #ccccbb;
    padding: 0 5px 0 8px;
`;

export const ActionName = styled.div`
    display: inline-block;
    position: relative;
    bottom: 2px;
`;

export const ActionIcon = styled.div`
    display: inline-block;
    padding-top: 4px;
    margin-right: 4px;
`;