const DynamicImports = async (ImageUrl) => {
    console.log("I am rendered...", ImageUrl);
    const module = await import(`../assets${ImageUrl}`);
    return module.default;
  };
  
  export default DynamicImports;