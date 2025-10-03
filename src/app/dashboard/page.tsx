'use client'
import { Edit2, Eye, Layers, Package, Plus, Search, ShoppingBag, Tag, Trash2, TrendingUp, X } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { products as allproducts } from '@/utils/products';

interface Products{
  id: number,
  image: StaticImageData,
  title: string,
  description: string,
  offerprice: number,
  mainprice: number,
  category: string,
  subcategory?: string,
  status: string,
  rating: number,
  stars: number,
  sizes?: boolean | string[],
  colors?: boolean | string[],
  isStock: boolean
}

interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
}

interface Order {
  id: number;
  product: string;
  customer: string;
  quantity: number;
  total: number;
  status: string;
  date: string;
}

const initialCategories: Category[] = [
  { id: 1, name: "electronics" },
  { id: 2, name: "furniture" },
  { id: 3, name: "fashion" },
  { id: 4, name: "pets" },
  { id: 5, name: "cosmetics" },
  { id: 6, name: "toys" },
  { id: 7, name: "sports" },
];

const initialSubcategories: Subcategory[] = [
  { id: 1, name: "gaming", categoryId: 1 },
  { id: 2, name: "computers", categoryId: 1 },
  { id: 3, name: "mobile", categoryId: 1 },
  { id: 4, name: "monitors", categoryId: 1 },
  { id: 5, name: "chairs", categoryId: 2 },
  { id: 6, name: "tables", categoryId: 2 },
  { id: 7, name: "sofas", categoryId: 2 },
];

const initialOrders: Order[] = [
  {
    id: 1,
    product: "HAVIT HV-G92 Gamepad",
    customer: "John Doe",
    quantity: 2,
    total: 560,
    status: "Pending",
    date: "2025-09-28",
  },
  {
    id: 2,
    product: "IPS LCD Gaming Monitor",
    customer: "Jane Smith",
    quantity: 1,
    total: 370,
    status: "Delivered",
    date: "2025-09-27",
  },
  {
    id: 3,
    product: "The north coat",
    customer: "Mike Johnson",
    quantity: 1,
    total: 260,
    status: "Shipped",
    date: "2025-09-26",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("products");
  const [products, setProducts] = useState<Products[]>(allproducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [subcategories, setSubcategories] = useState<Subcategory[]>(initialSubcategories);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState<Products | Subcategory | null>(null);
  const [formData, setFormData] = useState<Partial<Products & Subcategory>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const handleAddProduct = () => {
    setModalType("product");
    setEditingItem(null);
    setFormData({
      title: "",
      description: "",
      offerprice: 0,
      mainprice: 0,
      category: categories[0]?.name || "",
      subcategory: subcategories.filter(s => s.categoryId === categories[0]?.id)[0]?.name || "",
      status: "normal",
      rating: 0,
      stars: 0,
      isStock: true,
    });
    setShowModal(true);
  };

  const handleEditProduct = (product: Products) => {
    setModalType("product");
    setEditingItem(product);
    setFormData(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm("Delete This Products?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleSaveProduct = () => {
    const defaultProduct: Products = {
      id: editingItem && 'image' in editingItem ? editingItem.id : Date.now(),
      image: formData.image ?? allproducts[0].image,
      title: formData.title ?? "",
      description: formData.description ?? "",
      offerprice: formData.offerprice ?? 0,
      mainprice: formData.mainprice ?? 0,
      category: formData.category ?? "",
      subcategory: formData.subcategory,
      status: formData.status ?? "normal",
      rating: formData.rating ?? 0,
      stars: formData.stars ?? 0,
      sizes: formData.sizes ?? false,
      colors: formData.colors ?? false,
      isStock: formData.isStock ?? true,
    };

    if (editingItem && 'image' in editingItem) {
      setProducts(products.map((p) => (p.id === editingItem.id ? defaultProduct : p)));
    } else {
      setProducts([...products, defaultProduct]);
    }
    setShowModal(false);
  };

  const handleAddCategory = () => {
    setShowCategoryModal(true);
    setNewCategoryName("");
  };

  const handleSaveCategory = () => {
    if (newCategoryName && !categories.find(c => c.name.toLowerCase() === newCategoryName.toLowerCase())) {
      const newCategory: Category = {
        id: Date.now(),
        name: newCategoryName.toLowerCase()
      };
      setCategories([...categories, newCategory]);
      setShowCategoryModal(false);
      setNewCategoryName("");
    }
  };

  const handleDeleteCategory = (cat: Category) => {
    if (confirm(`"${cat.name}" category delete korte chan?`)) {
      setCategories(categories.filter((c) => c.id !== cat.id));
      setSubcategories(subcategories.filter((s) => s.categoryId !== cat.id));
      setProducts(products.map(p => 
        p.category === cat.name ? { ...p, category: "", subcategory: "" } : p
      ));
    }
  };

  const handleAddSubcategory = () => {
    setModalType("subcategory");
    setEditingItem(null);
    setFormData({
      name: "",
      categoryId: categories[0]?.id || 1
    });
    setShowModal(true);
  };

  const handleEditSubcategory = (subcat: Subcategory) => {
    setModalType("subcategory");
    setEditingItem(subcat);
    setFormData(subcat);
    setShowModal(true);
  };

  const handleDeleteSubcategory = (id: number) => {
    if (confirm("Subcategory delete korte chan?")) {
      setSubcategories(subcategories.filter((s) => s.id !== id));
      setProducts(products.map(p => 
        p.subcategory === subcategories.find(s => s.id === id)?.name ? { ...p, subcategory: "" } : p
      ));
    }
  };

  const handleSaveSubcategory = () => {
    if (editingItem && 'categoryId' in editingItem) {
      setSubcategories(
        subcategories.map((s) =>
          s.id === editingItem.id ? { ...formData as Subcategory, id: editingItem.id } : s
        )
      );
    } else {
      setSubcategories([...subcategories, { ...(formData as Subcategory), id: Date.now() }]);
    }
    setShowModal(false);
  };

  const getSubcategoriesByCategory = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName);
    if (!category) return [];
    return subcategories.filter(s => s.categoryId === category.id);
  };

  const handleUpdateOrderStatus = (id: number, newStatus: string) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  const handleDeleteOrder = (id: number) => {
    if (confirm("Order delete korte chan?")) {
      setOrders(orders.filter((o) => o.id !== id));
    }
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Pending: "bg-yellow-500",
      Shipped: "bg-blue-500",
      Delivered: "bg-green-500",
      Cancelled: "bg-red-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-40 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div>
              {/* <Logo /> */}
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "products"
                  ? "bg-primary text-white shadow-lg shadow-red-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Package className="h-5 w-5" />
              <span className="font-medium">Products</span>
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "categories"
                  ? "bg-primary text-white shadow-lg shadow-red-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Tag className="h-5 w-5" />
              <span className="font-medium">Categories</span>
            </button>
            <button
              onClick={() => setActiveTab("subcategories")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "subcategories"
                  ? "bg-primary text-white shadow-lg shadow-red-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Layers className="h-5 w-5" />
              <span className="font-medium">Subcategories</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "orders"
                  ? "bg-primary text-white shadow-lg shadow-red-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium">Orders</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-primary rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs font-semibold">LIVE</span>
            </div>
            <p className="text-2xl font-bold">{products.length}</p>
            <p className="text-xs opacity-90">Total Products</p>
          </div>
        </div>
      </div>

      <div className="lg:ml-64">
        <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h5 className="text-2xl font-bold text-gray-900">
                  {activeTab === "products"
                    ? "Products Management"
                    : activeTab === "categories"
                    ? "Categories"
                    : activeTab === "subcategories"
                    ? "Subcategories"
                    : "Orders Management"}
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                  {activeTab === "products"
                    ? "Manage your product inventory"
                    : activeTab === "categories"
                    ? "Organize product categories"
                    : activeTab === "subcategories"
                    ? "Manage subcategories under categories"
                    : "Track and manage orders"}
                </p>
              </div>

              {activeTab === "products" && (
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent w-full sm:w-64"
                    />
                  </div>
                  <button
                    onClick={handleAddProduct}
                    className="bg-primary text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all flex items-center gap-2 font-medium"
                  >
                    <Plus className="h-5 w-5" />
                    <span className="hidden sm:inline">Add Product</span>
                  </button>
                </div>
              )}

              {activeTab === "categories" && (
                <button
                  onClick={handleAddCategory}
                  className="bg-primary text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all flex items-center gap-2 font-medium"
                >
                  <Plus className="h-5 w-5" />
                  Add Category
                </button>
              )}

              {activeTab === "subcategories" && (
                <button
                  onClick={handleAddSubcategory}
                  className="bg-primary text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all flex items-center gap-2 font-medium"
                >
                  <Plus className="h-5 w-5" />
                  Add Subcategory
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {activeTab === "products" && (
            <div className="grid grid-cols-1 gap-6">
              {filteredProducts?.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Image src={product.image} alt="" />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="text-md font-bold text-gray-900 mb-1">
                              {product.title}
                            </h5>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-semibold capitalize">
                            {product.category}
                          </span>
                          {product?.subcategory && (
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold capitalize">
                              {product?.subcategory}
                            </span>
                          )}
                          <span
                            className={`px-3 py-1 ${
                              product.isStock
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            } rounded-full text-xs font-semibold`}
                          >
                            {product.isStock ? "✓ In Stock" : "✗ Out of Stock"}
                          </span>
                          {product.status !== "normal" && (
                            <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-xs font-semibold capitalize">
                              {product.status}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                              ${product.offerprice}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                              ${product.mainprice}
                            </span>
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                              {Math.round(
                                ((product.mainprice - product.offerprice) /
                                  product.mainprice) *
                                  100
                              )}
                              % OFF
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <span className="text-sm font-semibold">
                              {product.stars}
                            </span>
                            <span className="text-xs text-gray-400">
                              ({product.rating})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "categories" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories?.map((cat, index) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden group"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${
                      index % 5 === 0
                        ? "from-red-500 to-pink-600"
                        : index % 5 === 1
                        ? "from-blue-500 to-cyan-600"
                        : index % 5 === 2
                        ? "from-green-500 to-emerald-600"
                        : index % 5 === 3
                        ? "from-purple-500 to-violet-600"
                        : "from-orange-500 to-yellow-600"
                    }`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                          index % 5 === 0
                            ? "from-red-100 to-pink-100"
                            : index % 5 === 1
                            ? "from-blue-100 to-cyan-100"
                            : index % 5 === 2
                            ? "from-green-100 to-emerald-100"
                            : index % 5 === 3
                            ? "from-purple-100 to-violet-100"
                            : "from-orange-100 to-yellow-100"
                        } flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Tag
                          className={`h-6 w-6 ${
                            index % 5 === 0
                              ? "text-red-600"
                              : index % 5 === 1
                              ? "text-blue-600"
                              : index % 5 === 2
                              ? "text-green-600"
                              : index % 5 === 3
                              ? "text-purple-600"
                              : "text-orange-600"
                          }`}
                        />
                      </div>
                      <button
                        onClick={() => handleDeleteCategory(cat)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 capitalize mb-2">
                      {cat.name}
                    </h5>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {products.filter((p) => p.category === cat.name).length}{" "}
                        products • {subcategories.filter(s => s.categoryId === cat.id).length} subcategories
                      </p>
                      <button className="text-xs font-semibold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "subcategories" && (
            <div className="space-y-6">
              {categories?.map(category => {
                const categorySubcategories = subcategories.filter(s => s.categoryId === category.id);
                if (categorySubcategories.length === 0) return null;
                
                return (
                  <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b">
                      <h4 className="text-lg font-bold text-gray-900 capitalize">{category.name}</h4>
                      <p className="text-sm text-gray-500">{categorySubcategories.length} subcategories</p>
                    </div>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySubcategories?.map((subcat, index) => (
                        <div
                          key={subcat.id}
                          className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                                  index % 5 === 0
                                    ? "from-red-100 to-pink-100"
                                    : index % 5 === 1
                                    ? "from-blue-100 to-cyan-100"
                                    : index % 5 === 2
                                    ? "from-green-100 to-emerald-100"
                                    : index % 5 === 3
                                    ? "from-purple-100 to-violet-100"
                                    : "from-orange-100 to-yellow-100"
                                } flex items-center justify-center`}
                              >
                                <Layers
                                  className={`h-5 w-5 ${
                                    index % 5 === 0
                                      ? "text-red-600"
                                      : index % 5 === 1
                                      ? "text-blue-600"
                                      : index % 5 === 2
                                      ? "text-green-600"
                                      : index % 5 === 3
                                      ? "text-purple-600"
                                      : "text-orange-600"
                                  }`}
                                />
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 capitalize">
                                  {subcat.name}
                                </h5>
                                <p className="text-xs text-gray-500 capitalize">
                                  {category.name}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleEditSubcategory(subcat)}
                                className="p-1 hover:bg-blue-50 rounded text-blue-600 transition-colors"
                              >
                                <Edit2 className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteSubcategory(subcat.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-600 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-3 text-xs text-gray-500">
                            {products.filter(p => p.subcategory === subcat.name).length} products
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {subcategories.length === 0 && (
                <div className="text-center py-12">
                  <Layers className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Subcategories</h4>
                  <p className="text-gray-500 mb-4">Get started by creating your first subcategory</p>
                  <button
                    onClick={handleAddSubcategory}
                    className="bg-primary text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all"
                  >
                    Add Subcategory
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-4">
              {orders?.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-bold text-gray-500">
                                Order #{order.id}
                              </span>
                              <span
                                className={`w-2 h-2 rounded-full ${getStatusColor(
                                  order.status
                                )}`}
                              ></span>
                            </div>
                            <h5 className="text-lg font-bold text-gray-900 mb-1">
                              {order.product}
                            </h5>
                            <p className="text-sm text-gray-600">
                              Customer: {order.customer}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Quantity:</span>
                            <span className="font-semibold text-gray-900">
                              {order.quantity}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Total:</span>
                            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                              ${order.total}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Date:</span>
                            <span className="font-medium text-gray-900">
                              {order.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleUpdateOrderStatus(order.id, e.target.value)
                          }
                          className={`px-4 py-2 rounded-xl font-semibold text-sm border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            order.status === "Delivered"
                              ? "bg-green-50 text-green-700 border-green-200 focus:ring-green-500"
                              : order.status === "Shipped"
                              ? "bg-blue-50 text-blue-700 border-blue-200 focus:ring-blue-500"
                              : order.status === "Cancelled"
                              ? "bg-red-50 text-red-700 border-red-200 focus:ring-red-500"
                              : "bg-yellow-50 text-yellow-700 border-yellow-200 focus:ring-yellow-500"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <button
                          onClick={() => handleDeleteOrder(order.id)}
                          className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && modalType === "product" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-primary p-6 text-white rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-bold">
                  {editingItem ? "Edit Product" : "Add New Product"}
                </h5>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter product title..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter product description..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Offer Price ($)
                  </label>
                  <input
                    type="number"
                    value={formData.offerprice || 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        offerprice: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Main Price ($)
                  </label>
                  <input
                    type="number"
                    value={formData.mainprice || 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mainprice: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all capitalize"
                  >
                    {categories?.map((cat) => (
                      <option key={cat.id} value={cat.name} className="capitalize">
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subcategory
                  </label>
                  <select
                    value={formData.subcategory || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, subcategory: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all capitalize"
                  >
                    <option value="">Select Subcategory</option>
                    {getSubcategoriesByCategory(formData?.category || "").map((subcat) => (
                      <option key={subcat.id} value={subcat.name} className="capitalize">
                        {subcat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status || "normal"}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all capitalize"
                  >
                    <option value="normal">Normal</option>
                    <option value="flashSale">Flash Sale</option>
                    <option value="bestSelling">Best Selling</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isStock ?? true}
                    onChange={(e) =>
                      setFormData({ ...formData, isStock: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-red-500 peer-checked:to-pink-600"></div>
                  <span className="ml-3 text-sm font-semibold text-gray-700">
                    In Stock
                  </span>
                </label>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-red-200 font-semibold transition-all"
                >
                  {editingItem ? "Update Product" : "Add Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && modalType === "subcategory" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="sticky top-0 bg-primary p-6 text-white rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-bold">
                  {editingItem ? "Edit Subcategory" : "Add New Subcategory"}
                </h5>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subcategory Name
                </label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter subcategory name..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.categoryId || categories[0]?.id}
                  onChange={(e) =>
                    setFormData({ ...formData, categoryId: Number(e.target.value) })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all capitalize"
                >
                  {categories?.map((cat) => (
                    <option key={cat.id} value={cat.id} className="capitalize">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSubcategory}
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-red-200 font-semibold transition-all"
                >
                  {editingItem ? "Update Subcategory" : "Add Subcategory"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="sticky top-0 bg-primary p-6 text-white rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-bold">Add New Category</h5>
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter category name..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCategory}
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-red-200 font-semibold transition-all"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => setActiveTab("products")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "products" ? "text-red-600" : "text-gray-500"
            }`}
          >
            <Package className="h-6 w-6" />
            <span className="text-xs font-medium">Products</span>
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "categories" ? "text-red-600" : "text-gray-500"
            }`}
          >
            <Tag className="h-6 w-6" />
            <span className="text-xs font-medium">Categories</span>
          </button>
          <button
            onClick={() => setActiveTab("subcategories")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "subcategories" ? "text-red-600" : "text-gray-500"
            }`}
          >
            <Layers className="h-6 w-6" />
            <span className="text-xs font-medium">Subcategories</span>
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "orders" ? "text-red-600" : "text-gray-500"
            }`}
          >
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs font-medium">Orders</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard