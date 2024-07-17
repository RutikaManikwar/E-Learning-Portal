import React, { useState } from 'react';

const UploadPDF = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle PDF upload logic here
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload PDF</h2>
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPDF;
