
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
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGI1NzhkOTctYmIzNS00Yzc1LTg2M2EtOTI4MGI5N2ZmODZlLyIsImlhdCI6MTcyNTkxMTM3NSwibmJmIjoxNzI1OTExMzc1LCJleHAiOjE3MjU5MTY5NTMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFPVHFlUVFlYkhqZ29xQnFONE1UNXlwVitCeHk1K0l6QlUvVk5UOGZEM1ZkM0JqYzF5elFzYjJKVktudStPSWVvIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQVRUQUYiLCJnaXZlbl9uYW1lIjoiS2FvdXRhciIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE5Ny4xNDUuMTU0LjU3IiwibmFtZSI6Ikthb3V0YXIgQVRUQUYiLCJvaWQiOiI2MDVkYmJkYi1lZGJhLTRiZTYtODE2Ni0wZWNjMGFhYWM5ZTciLCJwdWlkIjoiMTAwMzIwMDIzMTY0OUU3NiIsInJoIjoiMC5BU0FBbDQxWEN6VzdkVXlHT3BLQXVYXzRiZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQWdBRFkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYWFwYnREQVd4OGlidGt5SE9lLUFaejF5ZmlUVklwVXl1cXJwSWd6SEFqTSIsInRpZCI6IjBiNTc4ZDk3LWJiMzUtNGM3NS04NjNhLTkyODBiOTdmZjg2ZSIsInVuaXF1ZV9uYW1lIjoia2FvdXRhci5hdHRhZkBlc2kuYWMubWEiLCJ1cG4iOiJrYW91dGFyLmF0dGFmQGVzaS5hYy5tYSIsInV0aSI6ImVFVDRlSEdITFVXWm9MQmVDWE15QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDI0In0.Z_7PhTdV0uZYbg_3Z0Upi0dsIFTVksp-hD74ICUXsI19bHL7v3Ht08Rj21xYJjozuVH2MZlSPybhGga2IRIuQnY6K1ntALsGfNG79VoF_FfEY6Aj8kSePc_gZy4G3lTk0ZpPec92lB1GC6GokgMr9ygm8ie2uMju9CvKQnp9_QqkVgitmdAFOw8JzRInpwQISRNmBs1TgilW7Ocy7kUquZyBiLmVuOVsEIyivueFnXQSsHLkmi7rSSgzSu7YjcuFr9nOxQ6hDSN_Bjc2E-k4fBSKje8ikiqZsXukD9Nzs7QZQi8Eyapht5ARHlf7AMEyaN593ikowrJ1EqPuDixS_w',
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

      

      cssClassName={"Embed-container"}           

      getEmbeddedComponent={(embeddedReport) => {
        reportRef.current = embeddedReport;
      }}
    />
  );
};

export default Dashboard2;