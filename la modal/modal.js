const btnVoirDetails = document.getElementById('btn-voir-details');
const modal = document.getElementById('modal');
const modalTitre = document.getElementById('modal-titre');
const modalPrix = document.getElementById('modal-prix');
const selectQuantite = document.getElementById('quantite-select');
const btnFermerModal = document.getElementById('btn-fermer-modal');

btnVoirDetails.addEventListener('click', () => {
  // Afficher la modal
  modal.style.display = 'block';

  // Afficher les données du produit
  modalTitre.textContent = 'T-shirt stylé';
  modalPrix.textContent = 'Prix : 10€';

  // Fermer la modal lorsque l'utilisateur clique sur le bouton "Fermer"
  btnFermerModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
