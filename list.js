document.addEventListener('DOMContentLoaded', () => {
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    function renderTable() {
        dataTable.innerHTML = '';

        doctors.forEach(doctor => {
            const row = dataTable.insertRow();
            row.insertCell(0).textContent = doctor.name;
            row.insertCell(1).textContent = doctor.specialty;

            const actionsCell = row.insertCell(2);
            // Cria o botão de editar.
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => editDoctor(doctor.id));

            const deleteButton = document.createElement('button');
             // Cria o botão de excluir.
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteDoctor(doctor.id));

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    }

    function editDoctor(id) {
        // Função para excluir um médico.
        const doctor = doctors.find(d => d.id === id);
        if (doctor) {
            const name = prompt('Editar Nome:', doctor.name);
            const specialty = prompt('Editar Especialidade:', doctor.specialty);

            if (name !== null && specialty !== null) {
                doctor.name = name;
                doctor.specialty = specialty;
                localStorage.setItem('doctors', JSON.stringify(doctors));
                renderTable();
            }
        }
    }

    function deleteDoctor(id) {
        doctors = doctors.filter(d => d.id !== id);
        localStorage.setItem('doctors', JSON.stringify(doctors));
        renderTable();
    }

    renderTable();
});
