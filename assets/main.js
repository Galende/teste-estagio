$("#cep").on("blur", () => {
    const zipcode = $("#cep").val();
    console.log(zipcode);

    $.ajax({
        url: "https://viacep.com.br/ws/" + zipcode + "/json",
        success: function (result) {
            $("#endereco").val(result.logradouro);
            $("#bairro").val(result.bairro + " " + result.complemento);
            $("#municipio").val(result.localidade);
            $("#estado").val(result.uf);
        },
    });
});
