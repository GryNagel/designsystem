import { IconCard } from '@sb1/ffe-cards-react';
import { GrafOppIkon } from '@sb1/ffe-icons-react';

<IconCard href="https://design.sparebank1.no" icon={<GrafOppIkon />}>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>Her kan man ha tekst</Text>
        </>
    )}
</IconCard>
