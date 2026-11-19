import { api } from "./api";

export const planetService = {
  getPlanets: (params) => api.getPlanets(params),
  getPlanetById: (id) => api.getPlanetById(id),
  createPlanet: (data) => api.createPlanet(data),
  resetToDefaults: () => api.resetToDefaults(),
  getAllPlanets: async () => {
    const res = await api.getPlanets({ limit: 1000 });
    const list = [...res.data];
    list._isCached = res.isCached;
    list._cachedAt = res.cachedAt;
    return list;
  }
};

export default planetService;
