document.addEventListener("DOMContentLoaded", function () {
    const url = 'packages/certifications/diploma.pdf';
    const container = document.getElementById('pdf-render-container');

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

    // Asynchronously download the PDF
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        console.log('PDF loaded');
        
        const renderPage = (pageNum) => {
            pdf.getPage(pageNum).then(function(page) {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({ canvasContext: context, viewport: viewport }).promise.then(function() {
                    console.log(`Page ${pageNum} rendered`);
                    container.appendChild(canvas);

                    // Render next page if there are more pages
                    if (pageNum < pdf.numPages) {
                        renderPage(pageNum + 1);
                    }
                });
            });
        };

        // Start rendering the first page
        renderPage(1);
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
    });
});
