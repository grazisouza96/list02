document.addEventListener('DOMContentLoaded', () => {
    const dataForm = document.getElementById('dataForm');
     // Entrada de nome pelo ID.
    const nameInput = document.getElementById('name');
    const specialtyInput = document.getElementById('specialty');

    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const specialty = specialtyInput.value.trim();

        if (name && specialty) {
            addDoctor(name, specialty);
            // Limpa os campos de entrada.
            nameInput.value = '';
            specialtyInput.value = '';
            window.location.href = 'index.html'; //  volta para a listagem após adicionar
        }
    });

    function addDoctor(name, specialty) {
        const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
        const doctor = { id: Date.now(), name, specialty };
        doctors.push(doctor);
         // Atualização  de médicos no armazenamento.
        localStorage.setItem('doctors', JSON.stringify(doctors));
    }
});
