//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DBLayer
{
    using System;
    
    public partial class GET_list_issues_Result
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public System.DateTime DateCreated { get; set; }
        public string ResolutionSummary { get; set; }
        public Nullable<System.DateTime> LastUpdateDate { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public string Priority { get; set; }
        public int StatusId { get; set; }
        public int PriorityId { get; set; }
        public string UpdatedBy { get; set; }
        public string AssignedTo { get; set; }
        public Nullable<int> AssignedToId { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
    }
}
