﻿using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplicationCar.Models.Cars.Toyota;

public class ColorModel
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public string Url { get; set; }
    
    public string RGB { get; set; }
    
    public string Code { get; set; }

    public List<ConfigurationColorsModel> Configurations { get; set; } = new List<ConfigurationColorsModel>();
}