export function validateItem(name: string, quantityText: string): string | null {
    try {
        if (!name || name.trim().length === 0) {
            return "Nazwa przedmiotu nie może być pusta.";
        }

        const quantity = Number(quantityText);

        if (isNaN(quantity)) {
            return "Ilość musi być liczbą.";
        }

        if (!Number.isInteger(quantity)) {
            return "Ilość musi być liczbą całkowitą.";
        }

        if (quantity <= 0) {
            return "Ilość musi być większa od zera.";
        }

        
        return null;
    } catch (err) {
        
        return "Wystąpił błąd podczas walidacji.";
    }
}


const error = validateItem("Jabłko", "5");
if (error) {
    console.error("Błąd:", error);
} else {
    console.log("Walidacja OK");
}
