import React from 'react';

const ViewPDFs = () => {
  // Assuming PDFs data would be fetched and stored in state
  const pdfs = [
    { id: 1, name: 'PDF1', url: '/path/to/pdf1' },
    { id: 2, name: 'PDF2', url: '/path/to/pdf2' }
  ];

  return (
    <div>
      <h2>PDFs</h2>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.id}>
            <a href={pdf.url} target="_blank" rel="noopener noreferrer">{pdf.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPDFs;
