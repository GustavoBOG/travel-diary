function UserProfile() {
    const [user] = useUser(); // Obtén el usuario del contexto
  
    // Verifica los datos del usuario en la consola
    console.log('Datos del usuario:', user);
  
    return (
      <div>
        {/* Mostrar los datos del usuario aquí */}
      </div>
    );
  }