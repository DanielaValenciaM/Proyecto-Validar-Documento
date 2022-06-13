const cc = 'documento';
const api_key = '';
const api_validations = '';
const api_documents_recognition = 'https://d2pq6js2en5cls.cloudfront.net/documents-recognition';

const getEnrollment = function(enrollment_id, api_key) {
    const endpoint = `${api_validations}/v1/enrollments/${enrollment_id}`;

    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'T_API-Key': api_key
          },
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

const btnValidar = document.getElementById('btnValidar');
btnValidar.addEventListener('click', function() {
    getEnrollment(cc, api_key);
    createValidation();
});

const createValidation = (enrollment_id)=> {
    const endpoint = `${api_validations}/v1/validations/${enrollment_id}`;
    const type=document.getElementById('tipodoc');
    const country=document.getElementById('paisdoc');
    const data = { 
        type: type,
        country:country,
        document_type:"",
        user_authorized:"",
        account_id:""
    }

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'T_API-Key': api_key
        },
        body: JSON.stringify(data)
        
    })
}