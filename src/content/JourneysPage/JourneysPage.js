import React from 'react';
import JourneysTable from './JourneysTable';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Products 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Products 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Products 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

const JourneysPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter products-page">
      <div className="bx--row journeys-page__r1">
        <div className="bx--col-lg-16">
          <JourneysTable headers={headers} rows={rows} />
          <div className="HeaderMenuButton" />
        </div>
      </div>
    </div>
  );
};

export default JourneysPage;
