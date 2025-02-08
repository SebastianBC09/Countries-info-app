import { Request, Response } from 'express';
import { countryService } from '../services/country.service';

export class CountryController {
  async getAllCountries(_req: Request, res: Response): Promise<void> {
    try {
      const countries = await countryService.getAllCountries();
      res.json({ data: countries });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch countries',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  async getCountryDetails(req: Request, res: Response): Promise<void> {
    try {
      const { code } = req.params;

      if (!code) {
        res.status(400).json({ error: 'Country code is required' });
        return;
      }

      const countryDetails = await countryService.getCountryDetails(code);
      res.json({ data: countryDetails });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch country details',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}

export const countryController = new CountryController();
