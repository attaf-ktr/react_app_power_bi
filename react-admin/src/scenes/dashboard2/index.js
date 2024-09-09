
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client'; // Ensure you import models from powerbi-client
import { useRef } from 'react';

const Dashboard2 = () => {
 
  
  const reportRef = useRef(null);

  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: '66a51f27-a9c7-41ba-b8b8-629c63ba9b48',
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=66a51f27-a9c7-41ba-b8b8-629c63ba9b48&groupId=15ba9061-c304-43ac-a39e-5f513cb461e5&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVVUk9QRS1OT1JUSC1CLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGI1NzhkOTctYmIzNS00Yzc1LTg2M2EtOTI4MGI5N2ZmODZlLyIsImlhdCI6MTcyNTkwNDk5MywibmJmIjoxNzI1OTA0OTkzLCJleHAiOjE3MjU5MDk3NjMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMmNBZ2xUR3ZWK083Mlc0b2xpYm5mN2srcGJySi9lNUgvczZPWjd0ZlhUODdPVjZuUTlFYnJxbXJ1TTc2NVJWOU9qTGtUTlZBQT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQVRUQUYiLCJnaXZlbl9uYW1lIjoiS2FvdXRhciIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE5Ny4xNDUuMTU0LjU3IiwibmFtZSI6Ikthb3V0YXIgQVRUQUYiLCJvaWQiOiI2MDVkYmJkYi1lZGJhLTRiZTYtODE2Ni0wZWNjMGFhYWM5ZTciLCJwdWlkIjoiMTAwMzIwMDIzMTY0OUU3NiIsInJoIjoiMC5BU0FBbDQxWEN6VzdkVXlHT3BLQXVYXzRiZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQWdBRFkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYWFwYnREQVd4OGlidGt5SE9lLUFaejF5ZmlUVklwVXl1cXJwSWd6SEFqTSIsInRpZCI6IjBiNTc4ZDk3LWJiMzUtNGM3NS04NjNhLTkyODBiOTdmZjg2ZSIsInVuaXF1ZV9uYW1lIjoia2FvdXRhci5hdHRhZkBlc2kuYWMubWEiLCJ1cG4iOiJrYW91dGFyLmF0dGFmQGVzaS5hYy5tYSIsInV0aSI6IkUzb1pJZWM4dmtLdTBPQjRid3c3QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIyIn0.MxazKdtoLLM_SJ7hlJgbKy865I5wPM66VnqSZxpqBby3_8LZEUnUnKGiyyVcoIcUC4o5DScOT4uuaNfLzEJuu8colF9MXcJQ61EghJvEM_YDo3JvVPlGodrZt-_xhmHjz-9tf-HKYwXx4q8qYsXtm5ukkIegx_C5AwNztxKETq8K6_NaZzhYIjL4WFNDfDPLES1knc00WxTNPTbJ_Qdbv2-6YDrF_sZ3p-El17lbUAYHKD1JS3Q56DLYg60rLdQczCXt0cC11mFFnVoDWzyXUPzbMVZ_Mc2fD2aSJ8pIZYkkBgylDjegFJimjqdD2km0AVSvI-sQMs6_JqboEHLfjg',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          },
          background: models.BackgroundType.Transparent,
        }
      }}

      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event.detail); }],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName={"reportClass"}

      getEmbeddedComponent={(embeddedReport) => {
        reportRef.current = embeddedReport;
      }}
    />
  );
};

export default Dashboard2;