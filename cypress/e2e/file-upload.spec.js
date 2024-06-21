describe('File Upload', () => {
    it('should upload a file successfully', () => {
        cy.visit('/file-upload');
        const fileName = 'example.json';
  
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: fileName,
                mimeType: 'application/json'
            });
        });
  
        cy.get('.upload-status').should('contain', 'Upload successful');
    });
});
  