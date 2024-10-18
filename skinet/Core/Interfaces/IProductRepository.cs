using System;
using System.Data;
using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<IReadOnlyList<Product>> GetProductsAsnyc(string? brand, string? type, string? sort);
    Task<Product?> GetProductByIdAsnyc(int id);
    Task<IReadOnlyList<string>> GetBrandsAsync();
    Task<IReadOnlyList<string>> GetTypesAsync();

    void AddProduct(Product product);

    void UpdateProduct(Product product);
    void DeleteProduct(Product product);
    bool ProductExists(int id);

    Task<bool> SaveChangesAsync();
}
