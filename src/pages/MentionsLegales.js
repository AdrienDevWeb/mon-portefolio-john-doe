// src/pages/MentionsLegales.js
import React from 'react';
import { Container } from 'react-bootstrap';

function MentionsLegales() {
  return (
    <section className="mentions-legales-section py-5">
      <Container>
        <h2 className="text-center mb-4">Mentions Légales</h2>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="h4 mb-3">1. Informations légales</h3>
          <p>
            Nom de l'entreprise : John Doe<br />
            Statut juridique : Auto-entrepreneur<br />
            Adresse : 13 rue de la République, 75001 Paris, France<br />
            Téléphone : 06 00 00 00 00<br />
            Email : john.doe@gmail.com<br />
            Numéro SIRET : <br />
            Code APE : 
          </p>

          <h3 className="h4 mt-4 mb-3">2. Hébergement</h3>
          <p>
            Nom de l'hébergeur : <br />
            Adresse de l'hébergeur : <br />
            Site web de l'hébergeur : 
          </p>

          <h3 className="h4 mt-4 mb-3">3. Propriété intellectuelle</h3>
          <p>
            L'ensemble de ce site, y compris les textes, photographies, infographies, logos, icônes, sons, images, ainsi que toutes les créations logicielles et bases de données, sont la propriété de John Doe ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de John Doe.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          <h3 className="h4 mt-4 mb-3">4. Collecte des données personnelles</h3>
          <p>
            Le présent site ne collecte pas de données personnelles de manière active en dehors des informations volontairement fournies par l'utilisateur via les formulaires de contact. Les données collectées via ces formulaires (nom, email, message) sont utilisées uniquement pour répondre aux demandes de l'utilisateur et ne sont en aucun cas cédées à des tiers.
          </p>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) 2016/679, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition relatif aux données vous concernant. Pour exercer ces droits, vous pouvez nous contacter par email à john.doe@gmail.com.
          </p>
        </div>
      </Container>
    </section>
  );
}
export default MentionsLegales;