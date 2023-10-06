export const BuyForm = (handleAddOrder, handleOnChange, dataForm) => {
  return (
    <form onSubmit={handleAddOrder}>
      <input
        type="text"
        name="name"
        placeholder="ingresa tu nombre"
        value={dataForm.name}
        onChange={handleOnChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="ingresa tu teléfono"
        value={dataForm.phone}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="email"
        placeholder="ingresa tu email"
        value={dataForm.email}
        onChange={handleOnChange}
      />
      <button className="button color--state-ok">Terminar compra</button>
    </form>
  );
};
