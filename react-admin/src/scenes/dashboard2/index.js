
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
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGI1NzhkOTctYmIzNS00Yzc1LTg2M2EtOTI4MGI5N2ZmODZlLyIsImlhdCI6MTcyNTk4ODU2NywibmJmIjoxNzI1OTg4NTY3LCJleHAiOjE3MjU5OTI1MDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFJRWhEekJMTC9tUGFBMVExNXBaTDVNa2hpYTZaMS9wbkpJWVJzaXB6anB4dGgySmRWQkQvQVRXWFBveXFhMlFOIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQVRUQUYiLCJnaXZlbl9uYW1lIjoiS2FvdXRhciIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwNS43NS42NC4xMjkiLCJuYW1lIjoiS2FvdXRhciBBVFRBRiIsIm9pZCI6IjYwNWRiYmRiLWVkYmEtNGJlNi04MTY2LTBlY2MwYWFhYzllNyIsInB1aWQiOiIxMDAzMjAwMjMxNjQ5RTc2IiwicmgiOiIwLkFTQUFsNDFYQ3pXN2RVeUdPcEtBdVhfNGJna0FBQUFBQUFBQXdBQUFBQUFBQUFBZ0FEWS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJhYXBidERBV3g4aWJ0a3lIT2UtQVp6MXlmaVRWSXBVeXVxcnBJZ3pIQWpNIiwidGlkIjoiMGI1NzhkOTctYmIzNS00Yzc1LTg2M2EtOTI4MGI5N2ZmODZlIiwidW5pcXVlX25hbWUiOiJrYW91dGFyLmF0dGFmQGVzaS5hYy5tYSIsInVwbiI6Imthb3V0YXIuYXR0YWZAZXNpLmFjLm1hIiwidXRpIjoiRm94enpqUlF4VXk0bDFJY1lhVFNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjAifQ.djgeBhAFGMvkNVuaCCaQ1VUQh6G7wfa6_ZuRm4DyaGuQapLNWzbHOqDBFYDEY-6--5wB55WX6I0-qYImrIWPlgs-kqnzAT3JM4iYZNF3tNq7cqZOuvzYTD8Dp8jNGeyE3AME_xy6cHtSlRYqGk4doFnOjvlbeR1jt2x015MknVEcNjv8NGVVyOnkO4O0QtO5C-OXwJQwSWczlWrGQ9OgzCWb6h1XXWEUS-_BPlKFfSI-Hqej4KkOWyUdNGRhWE5uavFrG7E_9pvpT0DOklYrBi7GJSKMAMA6Y3Ttn0CdC8H_2ncROfpDw2BtLEAdAXusJjCvW40ORKetbXZ8rI13QA',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          },
         
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