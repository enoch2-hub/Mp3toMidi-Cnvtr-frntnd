// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:2000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setMessage('File uploaded successfully!');
            // Assuming the backend returns a URL to download the MIDI file
            setDownloadLink(response.data.downloadLink);
        } catch (error) {
            setMessage('Failed to upload file.');
        }
    };

    const handleDownload = () => {
        // Example: trigger download on client side
        if (downloadLink) {
            window.open(downloadLink, '_blank');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
            {downloadLink && (
                <div>
                    <button onClick={handleDownload}>Download MIDI</button>
                    <p>Click the button above to download your MIDI file.</p>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
