function convertCodon()
  {
    const codon = document.getElementById('codonInput').value.toUpperCase();
    const aminoAcids = 
    {
        "AUG": { name: "Méthionine", image: "" },
        "UUU": { name: "Phénylalanine", image: "" },
        "UUC": { name: "Phénylalanine", image: "" },
        "UUA": { name: "Leucine", image: "" },
        "UUG": { name: "Leucine", image: "" },
        "CUU": { name: "Leucine", image: "" },
        "CUC": { name: "Leucine", image: "" },
        "CUA": { name: "Leucine", image: "" },
        "CUG": { name: "Leucine", image: "" },
        "AUU": { name: "Isoleucine", image: "" },
        "AUC": { name: "Isoleucine", image: "" },
        "AUA": { name: "Isoleucine", image: "" },
        "GUU": { name: "Valine", image: "" },
        "GUC": { name: "Valine", image: "" },
        "GUA": { name: "Valine", image: "" },
        "GUG": { name: "Valine", image: "" },
        "UCU": { name: "Sérine", image: "" },
        "UCC": { name: "Sérine", image: "" },
        "UCA": { name: "Sérine", image: "" },
        "UCG": { name: "Sérine", image: "" },
        "CCU": { name: "Proline", image: "" },
        "CCC": { name: "Proline", image: "" },
        "CCA": { name: "Proline", image: "" },
        "CCG": { name: "Proline", image: "" },
        "ACU": { name: "Thréonine", image: "" },
        "ACC": { name: "Thréonine", image: "" },
        "ACA": { name: "Thréonine", image: "" },
        "ACG": { name: "Thréonine", image: "" },
        "GCU": { name: "Alanine", image: "" },
        "GCC": { name: "Alanine", image: "" },
        "GCA": { name: "Alanine", image: "" },
        "GCG": { name: "Alanine", image: "" },
        "UGU": { name: "Cystéine", image: "" },
        "UGC": { name: "Cystéine", image: "" },
        "UAU": { name: "Tyrosine", image: "" },
        "UAC": { name: "Tyrosine", image: "" },
        "UAA": { name: "Arrêt", image: "" },
        "UAG": { name: "Arrêt", image: "" },
        "UGA": { name: "Arrêt", image: "" },
        "CGU": { name: "Arginine", image: "" },
        "CGC": { name: "Arginine", image: "" },
        "CGA": { name: "Arginine", image: "" },
        "CGG": { name: "Arginine", image: "" },
        "AGU": { name: "Sérine", image: "" },
        "AGC": { name: "Sérine", image: "" },
        "GGU": { name: "Glycine", image: "" },
        "GGC": { name: "Glycine", image: "" },
        "GGA": { name: "Glycine", image: "" },
        "GGG": { name: "Glycine", image: "" }
    };

    const aminoAcid = aminoAcids[codon];
    
    let result = "Codon inconnu.";
    let imageSrc = "";

    if (aminoAcid)
    {
        result = `Acide Aminé : ${aminoAcid.name}`;
        imageSrc = aminoAcid.image;
    }

    document.getElementById('result').textContent = result;
    const aminoImage = document.getElementById('aminoImage');
    aminoImage.src = imageSrc;
    aminoImage.style.display = imageSrc ? "block" : "none";
}
