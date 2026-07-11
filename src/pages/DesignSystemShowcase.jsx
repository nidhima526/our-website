import React, { useState } from 'react';
import { DashboardLayout } from '../design-system/layouts/DashboardLayout';
import Button from '../design-system/components/Button/Button';
import { Input, Textarea, Checkbox, ToggleSwitch } from '../design-system/components/Forms/Forms';
import { Tabs, Breadcrumb, Pagination, Stepper } from '../design-system/components/Navigation/Navigation';
import { Badge, Modal, Drawer, Toast } from '../design-system/components/Feedback/Feedback';
import { StatisticCard, ProfileCard, PricingCard } from '../design-system/components/Cards/Cards';
import { ProgressBar, Table } from '../design-system/components/DataDisplay/DataDisplay';
import { Plus, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

export const DesignSystemShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const chartData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 600 },
    { name: 'Apr', users: 800 },
    { name: 'May', users: 1200 }
  ];

  const tableData = [
    { id: 1, name: 'Rohan Sharma', role: 'Student', status: 'Active' },
    { id: 2, name: 'Priya Desai', role: 'Client', status: 'Pending' },
    { id: 3, name: 'Amit Kumar', role: 'Developer', status: 'Active' },
  ];

  return (
    <DashboardLayout userName="Nidhima (Admin)">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="page-heading">Design System</h1>
          <p className="body-text">ASHERVISION UI Components Library</p>
        </div>
        <Button onClick={toggleTheme} variant="outline">Toggle Dark Mode</Button>
      </div>

      <div className="grid ds-grid gap-6">
        
        {/* Buttons */}
        <section className="grid-cols-12 premium-card">
          <h3 className="section-heading mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="primary" iconLeft={<Plus size={18}/>}>With Icon</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Typography & Badges */}
        <section className="grid-cols-12 premium-card">
          <h3 className="section-heading mb-4">Badges & Feedback</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="info">New</Badge>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Button onClick={() => setDrawerOpen(true)} variant="secondary">Open Drawer</Button>
            <Button onClick={() => setToastOpen(true)} variant="outline">Show Toast</Button>
          </div>
        </section>

        {/* Forms */}
        <section className="grid-cols-12 premium-card">
          <h3 className="section-heading mb-4">Forms</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Email Address" placeholder="ashervsions@gmail.com" />
            <Input label="Password" type="password" error="Password must be 8+ characters" />
            <div className="grid-cols-2">
              <Textarea label="Message" placeholder="Type your message here..." />
            </div>
            <div className="flex flex-col gap-4">
              <Checkbox label="I accept the Terms and Conditions" id="terms" defaultChecked />
              <ToggleSwitch label="Enable notifications" id="notif" defaultChecked />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="grid-cols-12">
          <h3 className="section-heading mb-4">Cards</h3>
          <div className="grid grid-cols-3 gap-4">
            <StatisticCard title="Total Revenue" value="$45,231" icon={<BarChart2/>} trend={12.5} trendLabel="vs last month" />
            <ProfileCard name="Nidhima" role="Founder & CEO">
              <Button size="sm" variant="outline" isFullWidth>Message</Button>
              <Button size="sm" isFullWidth>Follow</Button>
            </ProfileCard>
            <PricingCard 
              title="Pro Plan" price="99" period="mo" 
              features={['All Courses', 'Live Mentorship', 'Certificate', '24/7 Support']} 
              isPopular buttonText="Upgrade Now" 
            />
          </div>
        </section>

        {/* Data Display */}
        <section className="grid-cols-12 premium-card">
          <h3 className="section-heading mb-4">Data Display</h3>
          
          <div className="mb-8">
            <ProgressBar progress={75} label="Course Completion" />
          </div>

          <div className="mb-8">
            <Stepper 
              currentStep={2} 
              steps={[{label: 'Register'}, {label: 'Payment'}, {label: 'Access'}, {label: 'Certificate'}]} 
            />
          </div>

          <div className="mb-8">
            <Table 
              columns={[{header: 'ID', accessor: 'id'}, {header: 'Name', accessor: 'name'}, {header: 'Role', accessor: 'role'}, {header: 'Status', accessor: 'status'}]}
              data={tableData}
            />
          </div>

          <div style={{ height: 300 }}>
            <h4 className="mb-4">Analytics Chart</h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <RechartsTooltip />
                <Line type="monotone" dataKey="users" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="System Update">
        <p>A new version of the ASHERVISION ecosystem is available. Please review the changes before applying.</p>
      </Modal>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h3 className="mb-4">Notifications</h3>
        <p className="text-muted">You have 3 new messages regarding the internship program.</p>
      </Drawer>

      {toastOpen && <Toast type="success" message="Data successfully saved!" onClose={() => setToastOpen(false)} />}
    </DashboardLayout>
  );
};
