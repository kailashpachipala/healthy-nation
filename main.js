// Healthy Nation - Main JavaScript File
// Comprehensive healthcare app functionality

// ===== DATA MODELS & MOCK BACKEND =====

class MockBackend {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        // Initialize with sample data if not exists
        if (!localStorage.getItem('healthy_nation_user')) {
            const userData = {
                id: 'user_001',
                name: 'Sarah Johnson',
                age: 32,
                weight: 65,
                height: 168,
                bloodGroup: 'O+',
                emergencyContacts: [
                    { name: 'John Johnson', phone: '+1-555-0123', relationship: 'Spouse' },
                    { name: 'Dr. Emily Chen', phone: '+1-555-0456', relationship: 'Primary Care' }
                ],
                connectedDevices: ['Apple Watch', 'Omron BP Monitor'],
                insurancePolicies: [
                    { provider: 'BlueCross', policyNumber: 'BC123456', expiry: '2025-12-31' }
                ],
                preferredLanguage: 'English',
                timezone: 'America/New_York'
            };
            localStorage.setItem('healthy_nation_user', JSON.stringify(userData));
        }

        // Initialize vitals data
        if (!localStorage.getItem('healthy_nation_vitals')) {
            const vitalsData = {
                heartRate: { current: 72, trend: 'stable', history: this.generateVitalHistory(72, 0.1) },
                bloodPressure: { systolic: 120, diastolic: 80, trend: 'stable', history: this.generateBPHistory() },
                spO2: { current: 98, trend: 'stable', history: this.generateVitalHistory(98, 0.5) },
                glucose: { current: 95, trend: 'stable', history: this.generateVitalHistory(95, 2) },
                steps: { current: 8432, goal: 10000, history: this.generateStepsHistory() },
                respiratoryRate: { current: 16, history: this.generateVitalHistory(16, 1) },
                ecgStatus: 'Normal'
            };
            localStorage.setItem('healthy_nation_vitals', JSON.stringify(vitalsData));
        }

        // Initialize medical history
        if (!localStorage.getItem('healthy_nation_medical_history')) {
            const medicalHistory = {
                conditions: [
                    { id: 1, name: 'Hypertension', startDate: '2020-01-15', status: 'Active', notes: 'Controlled with medication' },
                    { id: 2, name: 'Seasonal Allergies', startDate: '2018-03-10', status: 'Active', notes: 'Spring allergies' }
                ],
                visits: [
                    { id: 1, date: '2024-11-15', doctor: 'Dr. Emily Chen', specialty: 'Internal Medicine', mode: 'clinic', diagnosis: 'Routine checkup', medications: ['Lisinopril 10mg'] },
                    { id: 2, date: '2024-10-20', doctor: 'Dr. Michael Brown', specialty: 'Cardiology', mode: 'video', diagnosis: 'ECG review', medications: [] }
                ],
                labReports: [
                    { id: 1, type: 'Blood Test', date: '2024-11-01', keyValues: { hemoglobin: '13.2', glucose: '95', cholesterol: '180' }, file: 'blood_report_nov.pdf' },
                    { id: 2, type: 'X-Ray', date: '2024-09-15', keyValues: { result: 'Normal chest X-ray' }, file: 'chest_xray_sep.pdf' }
                ],
                medications: [
                    { id: 1, name: 'Lisinopril', dose: '10mg', frequency: 'Once daily', startDate: '2020-01-20', endDate: null, reminders: true },
                    { id: 2, name: 'Vitamin D3', dose: '2000 IU', frequency: 'Once daily', startDate: '2024-01-10', endDate: null, reminders: true }
                ],
                familyHistory: [
                    { relation: 'Father', condition: 'Diabetes Type 2' },
                    { relation: 'Mother', condition: 'Hypertension' }
                ],
                hospitals: [
                    { name: 'City General Hospital', lastVisit: '2024-11-15', type: 'Primary Care' },
                    { name: 'Heart Center', lastVisit: '2024-10-20', type: 'Specialist' }
                ],
                doctors: [
                    { name: 'Dr. Emily Chen', specialty: 'Internal Medicine', contact: '+1-555-0456', lastVisit: '2024-11-15' },
                    { name: 'Dr. Michael Brown', specialty: 'Cardiology', contact: '+1-555-0789', lastVisit: '2024-10-20' }
                ]
            };
            localStorage.setItem('healthy_nation_medical_history', JSON.stringify(medicalHistory));
        }

        // Initialize appointments
        if (!localStorage.getItem('healthy_nation_appointments')) {
            const appointments = [
                {
                    id: 1,
                    doctor: 'Dr. Sarah Williams',
                    specialty: 'Endocrinologist',
                    date: '2024-12-12',
                    time: '10:30',
                    mode: 'clinic',
                    status: 'confirmed',
                    reason: 'Diabetes management',
                    location: 'Medical Center, Room 205'
                },
                {
                    id: 2,
                    doctor: 'Dr. James Davis',
                    specialty: 'Dermatologist',
                    date: '2024-12-15',
                    time: '14:00',
                    mode: 'video',
                    status: 'confirmed',
                    reason: 'Skin examination',
                    meetingLink: 'https://meet.example.com/derm123'
                }
            ];
            localStorage.setItem('healthy_nation_appointments', JSON.stringify(appointments));
        }
    }

    generateVitalHistory(baseValue, variance) {
        const history = [];
        const now = new Date();
        for (let i = 30; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            const value = baseValue + (Math.random() - 0.5) * variance * 2;
            history.push({ date: date.toISOString(), value: Math.round(value) });
        }
        return history;
    }

    generateBPHistory() {
        const history = [];
        const now = new Date();
        for (let i = 30; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            const systolic = 120 + (Math.random() - 0.5) * 20;
            const diastolic = 80 + (Math.random() - 0.5) * 10;
            history.push({ 
                date: date.toISOString(), 
                systolic: Math.round(systolic),
                diastolic: Math.round(diastolic)
            });
        }
        return history;
    }

    generateStepsHistory() {
        const history = [];
        const now = new Date();
        for (let i = 30; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            const steps = 8000 + Math.random() * 4000;
            history.push({ date: date.toISOString(), value: Math.round(steps) });
        }
        return history;
    }

    // Data access methods
    getUserData() {
        return JSON.parse(localStorage.getItem('healthy_nation_user'));
    }

    getVitals() {
        return JSON.parse(localStorage.getItem('healthy_nation_vitals'));
    }

    getMedicalHistory() {
        return JSON.parse(localStorage.getItem('healthy_nation_medical_history'));
    }

    getAppointments() {
        return JSON.parse(localStorage.getItem('healthy_nation_appointments'));
    }

    saveUserData(data) {
        localStorage.setItem('healthy_nation_user', JSON.stringify(data));
    }

    saveVitals(vitals) {
        localStorage.setItem('healthy_nation_vitals', JSON.stringify(vitals));
    }

    saveMedicalHistory(history) {
        localStorage.setItem('healthy_nation_medical_history', JSON.stringify(history));
    }

    saveAppointments(appointments) {
        localStorage.setItem('healthy_nation_appointments', JSON.stringify(appointments));
    }
}

// ===== ANIMATION CONTROLLER =====

class AnimationController {
    constructor() {
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Fade in animation for page load
        anime({
            targets: '.fade-in',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuart'
        });

        // Pulse animation for vital signs
        anime({
            targets: '.pulse-animation',
            scale: [1, 1.05, 1],
            duration: 2000,
            loop: true,
            easing: 'easeInOutSine'
        });

        // Slide in for cards
        anime({
            targets: '.slide-in',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(150),
            easing: 'easeOutExpo'
        });
    }

    animateVitalUpdate(element, newValue) {
        anime({
            targets: element,
            innerHTML: [element.innerHTML, newValue],
            duration: 1000,
            round: 1,
            easing: 'easeOutQuart',
            update: function(anim) {
                element.innerHTML = Math.round(anim.animatables[0].target.innerHTML);
            }
        });

        // Color flash for updates
        anime({
            targets: element.parentElement,
            backgroundColor: ['#E0F2FE', '#0891B2', '#E0F2FE'],
            duration: 1500,
            easing: 'easeInOutSine'
        });
    }

    animateButtonPress(element) {
        anime({
            targets: element,
            scale: [1, 0.95, 1],
            duration: 200,
            easing: 'easeOutQuart'
        });
    }

    animateCardExpansion(card) {
        const isExpanded = card.classList.contains('expanded');
        
        if (!isExpanded) {
            anime({
                targets: card,
                height: 'auto',
                duration: 400,
                easing: 'easeOutQuart'
            });
            card.classList.add('expanded');
        } else {
            anime({
                targets: card,
                height: '120px',
                duration: 400,
                easing: 'easeOutQuart'
            });
            card.classList.remove('expanded');
        }
    }
}

// ===== NOTIFICATION SYSTEM =====

class NotificationSystem {
    constructor() {
        this.notifications = [];
    }

    show(message, type = 'info', duration = 5000) {
        const notification = {
            id: Date.now(),
            message,
            type,
            duration,
            timestamp: new Date()
        };

        this.notifications.push(notification);
        this.renderNotification(notification);
        
        if (duration > 0) {
            setTimeout(() => this.dismiss(notification.id), duration);
        }
    }

    renderNotification(notification) {
        const container = document.getElementById('notification-container') || this.createContainer();
        
        const notificationEl = document.createElement('div');
        notificationEl.className = `notification notification-${notification.type} fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm`;
        notificationEl.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="notification-icon mr-3">
                        ${this.getIcon(notification.type)}
                    </div>
                    <div>
                        <p class="text-sm font-medium">${notification.message}</p>
                        <p class="text-xs text-gray-500">${notification.timestamp.toLocaleTimeString()}</p>
                    </div>
                </div>
                <button onclick="notificationSystem.dismiss(${notification.id})" class="ml-4 text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        `;

        container.appendChild(notificationEl);

        // Animate in
        anime({
            targets: notificationEl,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }

    createContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'fixed top-4 right-4 z-50';
        document.body.appendChild(container);
        return container;
    }

    getIcon(type) {
        const icons = {
            info: '<svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>',
            success: '<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
            warning: '<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
            error: '<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>'
        };
        return icons[type] || icons.info;
    }

    dismiss(id) {
        const notification = document.querySelector(`[onclick*="${id}"]`).closest('.notification');
        
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                notification.remove();
                this.notifications = this.notifications.filter(n => n.id !== id);
            }
        });
    }
}

// ===== VITAL SIGNS MONITOR =====

class VitalSignsMonitor {
    constructor(backend) {
        this.backend = backend;
        this.isMonitoring = false;
        this.updateInterval = null;
    }

    startMonitoring() {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        this.updateInterval = setInterval(() => {
            this.updateVitals();
        }, 5000); // Update every 5 seconds

        notificationSystem.show('Vital signs monitoring started', 'success');
    }

    stopMonitoring() {
        if (!this.isMonitoring) return;
        
        this.isMonitoring = false;
        clearInterval(this.updateInterval);
        
        notificationSystem.show('Vital signs monitoring stopped', 'info');
    }

    updateVitals() {
        const vitals = this.backend.getVitals();
        const now = new Date();

        // Simulate realistic vital sign variations
        vitals.heartRate.current = this.simulateVital(vitals.heartRate.current, 60, 100, 2);
        vitals.spO2.current = this.simulateVital(vitals.spO2.current, 95, 100, 1);
        vitals.glucose.current = this.simulateVital(vitals.glucose.current, 80, 120, 3);
        vitals.steps.current += Math.floor(Math.random() * 50);
        vitals.respiratoryRate.current = this.simulateVital(vitals.respiratoryRate.current, 12, 20, 1);

        // Add to history
        vitals.heartRate.history.push({ date: now.toISOString(), value: vitals.heartRate.current });
        vitals.spO2.history.push({ date: now.toISOString(), value: vitals.spO2.current });
        vitals.glucose.history.push({ date: now.toISOString(), value: vitals.glucose.current });
        vitals.steps.history.push({ date: now.toISOString(), value: vitals.steps.current });
        vitals.respiratoryRate.history.push({ date: now.toISOString(), value: vitals.respiratoryRate.current });

        // Keep only last 30 days
        Object.keys(vitals).forEach(key => {
            if (vitals[key].history) {
                vitals[key].history = vitals[key].history.slice(-30);
            }
        });

        this.backend.saveVitals(vitals);
        this.updateUI(vitals);
        this.checkThresholds(vitals);
    }

    simulateVital(current, min, max, variance) {
        let newValue = current + (Math.random() - 0.5) * variance * 2;
        newValue = Math.max(min, Math.min(max, newValue));
        return Math.round(newValue);
    }

    updateUI(vitals) {
        // Update vital display elements
        const vitalElements = {
            'heart-rate': vitals.heartRate.current,
            'spO2-value': vitals.spO2.current,
            'glucose-value': vitals.glucose.current,
            'steps-value': vitals.steps.current,
            'respiratory-rate': vitals.respiratoryRate.current
        };

        Object.entries(vitalElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                animationController.animateVitalUpdate(element, value);
            }
        });

        // Update progress bars
        this.updateProgressBars(vitals);
    }

    updateProgressBars(vitals) {
        const stepsProgress = (vitals.steps.current / vitals.steps.goal) * 100;
        const stepsBar = document.getElementById('steps-progress');
        if (stepsBar) {
            anime({
                targets: stepsBar,
                width: `${Math.min(stepsProgress, 100)}%`,
                duration: 1000,
                easing: 'easeOutQuart'
            });
        }
    }

    checkThresholds(vitals) {
        const alerts = [];

        if (vitals.heartRate.current > 100) {
            alerts.push({ type: 'warning', message: 'Heart rate is elevated' });
        } else if (vitals.heartRate.current < 60) {
            alerts.push({ type: 'warning', message: 'Heart rate is low' });
        }

        if (vitals.spO2.current < 95) {
            alerts.push({ type: 'critical', message: 'Blood oxygen level is low' });
        }

        if (vitals.glucose.current > 140) {
            alerts.push({ type: 'warning', message: 'Glucose level is high' });
        } else if (vitals.glucose.current < 70) {
            alerts.push({ type: 'critical', message: 'Glucose level is low' });
        }

        alerts.forEach(alert => {
            notificationSystem.show(alert.message, alert.type, 10000);
        });
    }
}

// ===== EMERGENCY SYSTEM =====

class EmergencySystem {
    constructor(backend) {
        this.backend = backend;
        this.emergencyContacts = this.getEmergencyContacts();
    }

    getEmergencyContacts() {
        const userData = this.backend.getUserData();
        return userData.emergencyContacts || [];
    }

    triggerEmergency(type = 'general') {
        const emergencyTypes = {
            general: { message: 'Emergency activated. Contacting emergency services and your emergency contacts.', number: '911' },
            medical: { message: 'Medical emergency. Calling emergency services and notifying your contacts.', number: '911' },
            fall: { message: 'Fall detected. Contacting emergency services.', number: '911' }
        };

        const emergency = emergencyTypes[type];
        
        // Show emergency modal
        this.showEmergencyModal(emergency);
        
        // Simulate calling emergency services
        setTimeout(() => {
            this.callEmergencyServices(emergency.number);
        }, 2000);
        
        // Notify emergency contacts
        this.notifyEmergencyContacts(type);
        
        // Share location
        this.shareLocation();
    }

    showEmergencyModal(emergency) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-red-600 bg-opacity-95 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white p-8 rounded-lg max-w-md mx-4 text-center">
                <div class="text-red-600 mb-4">
                    <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">EMERGENCY ACTIVATED</h2>
                <p class="text-gray-700 mb-6">${emergency.message}</p>
                <div class="space-y-3">
                    <button onclick="emergencySystem.callEmergencyServices('${emergency.number}')" class="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold">
                        Call ${emergency.number}
                    </button>
                    <button onclick="emergencySystem.cancelEmergency()" class="w-full bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.currentModal = modal;
    }

    callEmergencyServices(number) {
        notificationSystem.show(`Calling ${number}...`, 'critical');
        
        // Simulate call connection
        setTimeout(() => {
            notificationSystem.show(`Connected to ${number}`, 'success');
        }, 3000);
    }

    notifyEmergencyContacts(type) {
        this.emergencyContacts.forEach(contact => {
            notificationSystem.show(`Notified ${contact.name} (${contact.relationship})`, 'info');
        });
    }

    shareLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    notificationSystem.show(`Location shared: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, 'info');
                },
                (error) => {
                    notificationSystem.show('Location sharing failed', 'warning');
                }
            );
        } else {
            notificationSystem.show('Geolocation not supported', 'warning');
        }
    }

    cancelEmergency() {
        if (this.currentModal) {
            this.currentModal.remove();
            this.currentModal = null;
        }
        notificationSystem.show('Emergency cancelled', 'info');
    }
}

// ===== AI ASSISTANT =====

class AIAssistant {
    constructor(backend) {
        this.backend = backend;
        this.conversationHistory = [];
        this.isTyping = false;
    }

    async processSymptoms(symptoms, context) {
        this.showTypingIndicator();
        
        // Simulate AI processing time
        await this.delay(2000);
        
        const response = this.generateAIResponse(symptoms, context);
        this.hideTypingIndicator();
        
        return response;
    }

    generateAIResponse(symptoms, context) {
        const responses = {
            fever: {
                possibleCauses: ['Viral infection', 'Bacterial infection', 'Inflammation'],
                recommendations: ['Rest and hydration', 'Monitor temperature', 'Consider acetaminophen'],
                severity: 'moderate',
                nextSteps: ['Monitor for 24 hours', 'Contact doctor if fever persists']
            },
            headache: {
                possibleCauses: ['Tension', 'Dehydration', 'Migraine'],
                recommendations: ['Hydrate well', 'Rest in dark room', 'Gentle neck stretches'],
                severity: 'mild',
                nextSteps: ['Track triggers', 'Consider over-the-counter pain relief']
            },
            chest_pain: {
                possibleCauses: ['Muscle strain', 'Anxiety', 'Acid reflux'],
                recommendations: ['Seek immediate medical attention', 'Do not ignore chest pain'],
                severity: 'critical',
                nextSteps: ['Call emergency services', 'Go to nearest ER']
            }
        };

        const primarySymptom = symptoms[0] || 'general';
        const response = responses[primarySymptom] || responses.general || {
            possibleCauses: ['Various conditions'],
            recommendations: ['Monitor symptoms', 'Stay hydrated', 'Rest'],
            severity: 'mild',
            nextSteps: ['Contact healthcare provider if symptoms worsen']
        };

        return {
            ...response,
            disclaimer: 'This is not a medical diagnosis. Please consult with a healthcare professional for proper medical advice.',
            confidence: Math.floor(Math.random() * 30) + 70 // 70-100%
        };
    }

    showTypingIndicator() {
        const chatContainer = document.getElementById('ai-chat-container');
        if (chatContainer) {
            const typingEl = document.createElement('div');
            typingEl.className = 'ai-typing flex items-center space-x-2 p-3 bg-gray-100 rounded-lg';
            typingEl.innerHTML = `
                <div class="typing-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="typing-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="typing-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            `;
            chatContainer.appendChild(typingEl);
            this.scrollToBottom();
        }
    }

    hideTypingIndicator() {
        const typingEl = document.querySelector('.ai-typing');
        if (typingEl) {
            typingEl.remove();
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    scrollToBottom() {
        const chatContainer = document.getElementById('ai-chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
}

// ===== INITIALIZATION =====

// Global instances
let backend, animationController, notificationSystem, vitalSignsMonitor, emergencySystem, aiAssistant;
let paymentSystem, deliverySystem, pharmacySystem, notificationManager;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core systems
    backend = new MockBackend();
    animationController = new AnimationController();
    notificationSystem = new NotificationSystem();
    vitalSignsMonitor = new VitalSignsMonitor(backend);
    emergencySystem = new EmergencySystem(backend);
    aiAssistant = new AIAssistant(backend);
    paymentSystem = new PaymentSystem(backend);
    deliverySystem = new DeliverySystem();
    pharmacySystem = new PharmacySystem();
    notificationManager = new NotificationManager();

    // Initialize page-specific functionality
    initializePage();
    
    // Start vital signs monitoring
    vitalSignsMonitor.startMonitoring();
    
    // Start notification system
    notificationManager.start();
    
    console.log('Healthy Nation app initialized successfully');
});

function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'health.html':
            initializeHealthPage();
            break;
        case 'assistant.html':
            initializeAssistantPage();
            break;
        case 'doctors.html':
            initializeDoctorsPage();
            break;
        case 'profile.html':
            initializeProfilePage();
            break;
        case 'emergency.html':
            initializeEmergencyPage();
            break;
    }
}

// ===== PAGE-SPECIFIC INITIALIZATION =====

function initializeHomePage() {
    updateVitalCards();
    updateAppointments();
    updateNotificationBanners();
    
    // Quick action handlers
    document.getElementById('start-checkup')?.addEventListener('click', () => {
        window.location.href = 'assistant.html';
    });
    
    document.getElementById('connect-device')?.addEventListener('click', () => {
        window.location.href = 'health.html';
    });
    
    document.getElementById('view-history')?.addEventListener('click', () => {
        window.location.href = 'medical-history.html';
    });
}

function initializeHealthPage() {
    setupVitalCharts();
    updateLiveVitals();
    
    // Device connection simulation
    document.getElementById('connect-device-btn')?.addEventListener('click', () => {
        simulateDeviceConnection();
    });
}

function initializeAssistantPage() {
    setupAIChat();
    
    // Symptom selection handlers
    document.querySelectorAll('.symptom-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectSymptom(e.target.dataset.symptom);
        });
    });
}

function initializeDoctorsPage() {
    loadDoctorsList();
    setupDoctorFilters();
}

function initializeProfilePage() {
    loadUserProfile();
    setupProfileForm();
}

function initializeEmergencyPage() {
    setupEmergencyButtons();
}

// ===== UI UPDATE FUNCTIONS =====

function updateVitalCards() {
    const vitals = backend.getVitals();
    
    // Update heart rate
    const hrElement = document.getElementById('heart-rate');
    if (hrElement) hrElement.textContent = vitals.heartRate.current;
    
    // Update SpO2
    const spO2Element = document.getElementById('spO2-value');
    if (spO2Element) spO2Element.textContent = vitals.spO2.current;
    
    // Update glucose
    const glucoseElement = document.getElementById('glucose-value');
    if (glucoseElement) glucoseElement.textContent = vitals.glucose.current;
    
    // Update steps
    const stepsElement = document.getElementById('steps-value');
    if (stepsElement) stepsElement.textContent = vitals.steps.current;
}

function updateAppointments() {
    const appointments = backend.getAppointments();
    const container = document.getElementById('appointments-container');
    
    if (container && appointments.length > 0) {
        container.innerHTML = appointments.map(apt => `
            <div class="appointment-card bg-white p-4 rounded-lg shadow-md mb-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-semibold text-lg">${apt.doctor}</h3>
                        <p class="text-gray-600">${apt.specialty}</p>
                        <p class="text-sm text-gray-500">${apt.date} at ${apt.time}</p>
                        <p class="text-sm text-blue-600">${apt.mode === 'video' ? '📹 Video Call' : '🏥 Clinic Visit'}</p>
                    </div>
                    <div class="text-right">
                        <div class="countdown text-sm font-medium text-red-600" data-date="${apt.date}T${apt.time}"></div>
                        <div class="mt-2 space-x-2">
                            <button class="text-blue-600 text-sm hover:underline" onclick="viewAppointment(${apt.id})">View</button>
                            <button class="text-green-600 text-sm hover:underline" onclick="addToCalendar(${apt.id})">Calendar</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        updateCountdowns();
    }
}

function updateCountdowns() {
    document.querySelectorAll('.countdown').forEach(element => {
        const appointmentDate = new Date(element.dataset.date);
        const now = new Date();
        const diff = appointmentDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            if (days > 0) {
                element.textContent = `In ${days} days`;
            } else if (hours > 0) {
                element.textContent = `In ${hours}h ${minutes}m`;
            } else {
                element.textContent = `In ${minutes} minutes`;
                element.classList.add('animate-pulse');
            }
        } else {
            element.textContent = 'Appointment time';
            element.classList.add('text-green-600');
        }
    });
}

function updateNotificationBanners() {
    const vitals = backend.getVitals();
    const container = document.getElementById('notification-banners');
    
    if (!container) return;
    
    const banners = [];
    
    // Check for vital alerts
    if (vitals.heartRate.current > 100) {
        banners.push({
            type: 'warning',
            title: 'Heart Rate Alert',
            message: 'Your heart rate is elevated. Consider resting.',
            action: 'Check Vitals',
            actionLink: 'health.html'
        });
    }
    
    if (vitals.steps.current >= vitals.steps.goal) {
        banners.push({
            type: 'success',
            title: 'Goal Achieved!',
            message: `You've reached your daily step goal of ${vitals.steps.goal} steps!`,
            action: 'View Progress',
            actionLink: 'health.html'
        });
    }
    
    // Weekly health score
    const healthScore = calculateHealthScore(vitals);
    if (healthScore > 80) {
        banners.push({
            type: 'success',
            title: 'Great Health Score',
            message: `Your weekly health score is ${healthScore}/100. Keep it up!`,
            action: 'View Report',
            actionLink: 'health.html'
        });
    }
    
    container.innerHTML = banners.map(banner => `
        <div class="notification-banner ${banner.type} p-4 rounded-lg shadow-md mb-4 cursor-pointer" onclick="window.location.href='${banner.actionLink}'">
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-semibold">${banner.title}</h4>
                    <p class="text-sm">${banner.message}</p>
                </div>
                <button class="text-sm font-medium underline">${banner.action}</button>
            </div>
        </div>
    `).join('');
}

function calculateHealthScore(vitals) {
    let score = 0;
    
    // Heart rate (0-25 points)
    if (vitals.heartRate.current >= 60 && vitals.heartRate.current <= 100) {
        score += 25;
    } else {
        score += 15;
    }
    
    // SpO2 (0-25 points)
    if (vitals.spO2.current >= 95) {
        score += 25;
    } else {
        score += 15;
    }
    
    // Steps (0-25 points)
    const stepsRatio = vitals.steps.current / vitals.steps.goal;
    score += Math.min(stepsRatio * 25, 25);
    
    // Glucose (0-25 points)
    if (vitals.glucose.current >= 70 && vitals.glucose.current <= 140) {
        score += 25;
    } else {
        score += 10;
    }
    
    return Math.round(score);
}

// ===== UTILITY FUNCTIONS =====

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

function getVitalStatus(value, min, max) {
    if (value < min || value > max) return 'critical';
    if ((value > min + (max - min) * 0.1 && value < min + (max - min) * 0.9)) return 'normal';
    return 'warning';
}

// ===== PAYMENT SYSTEM =====

class PaymentSystem {
    constructor() {
        this.paymentMethods = this.loadPaymentMethods();
        this.transactions = this.loadTransactions();
    }

    loadPaymentMethods() {
        const saved = localStorage.getItem('healthy_nation_payment_methods');
        return saved ? JSON.parse(saved) : [
            { id: 1, type: 'upi', name: 'UPI ID', details: 'user@upi', isDefault: true },
            { id: 2, type: 'card', name: 'Visa ****1234', details: 'Expires 12/26', isDefault: false }
        ];
    }

    loadTransactions() {
        const saved = localStorage.getItem('healthy_nation_transactions');
        return saved ? JSON.parse(saved) : [];
    }

    savePaymentMethods() {
        localStorage.setItem('healthy_nation_payment_methods', JSON.stringify(this.paymentMethods));
    }

    saveTransactions() {
        localStorage.setItem('healthy_nation_transactions', JSON.stringify(this.transactions));
    }

    addPaymentMethod(method) {
        method.id = Date.now();
        this.paymentMethods.push(method);
        this.savePaymentMethods();
        return method;
    }

    processPayment(amount, methodId, description) {
        const method = this.paymentMethods.find(m => m.id === methodId);
        if (!method) {
            throw new Error('Payment method not found');
        }

        // Simulate payment processing
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.1; // 90% success rate
                
                if (success) {
                    const transaction = {
                        id: Date.now(),
                        amount,
                        description,
                        method: method.type,
                        methodDetails: method.name,
                        status: 'completed',
                        timestamp: new Date().toISOString()
                    };
                    
                    this.transactions.push(transaction);
                    this.saveTransactions();
                    resolve(transaction);
                } else {
                    reject(new Error('Payment failed. Please try again.'));
                }
            }, 2000);
        });
    }

    getPaymentMethods() {
        return this.paymentMethods;
    }

    getTransactions() {
        return this.transactions;
    }
}

// ===== DELIVERY SYSTEM =====

class DeliverySystem {
    constructor() {
        this.orders = this.loadOrders();
        this.deliveryPartners = this.generateDeliveryPartners();
    }

    loadOrders() {
        const saved = localStorage.getItem('healthy_nation_delivery_orders');
        return saved ? JSON.parse(saved) : [];
    }

    saveOrders() {
        localStorage.setItem('healthy_nation_delivery_orders', JSON.stringify(this.orders));
    }

    generateDeliveryPartners() {
        return [
            { id: 1, name: 'Raj Kumar', vehicle: 'Bike', rating: 4.8, phone: '+91-98765-43210' },
            { id: 2, name: 'Priya Sharma', vehicle: 'Scooter', rating: 4.9, phone: '+91-98765-43211' },
            { id: 3, name: 'Amit Patel', vehicle: 'Car', rating: 4.7, phone: '+91-98765-43212' }
        ];
    }

    createOrder(items, pharmacy, deliveryAddress, paymentMethod) {
        const order = {
            id: 'DEL-' + Date.now(),
            items,
            pharmacy,
            deliveryAddress,
            paymentMethod,
            status: 'pending',
            createdAt: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 mins
            deliveryPartner: null,
            tracking: []
        };

        this.orders.push(order);
        this.saveOrders();
        this.processOrder(order);
        return order;
    }

    async processOrder(order) {
        // Simulate order processing
        await this.delay(1000);
        order.status = 'confirmed';
        this.addTrackingEvent(order, 'Order confirmed');
        
        await this.delay(2000);
        order.status = 'preparing';
        this.addTrackingEvent(order, 'Preparing your order');
        
        await this.delay(3000);
        const partner = this.deliveryPartners[Math.floor(Math.random() * this.deliveryPartners.length)];
        order.deliveryPartner = partner;
        order.status = 'assigned';
        this.addTrackingEvent(order, `Delivery partner assigned: ${partner.name}`);
        
        await this.delay(2000);
        order.status = 'shipped';
        this.addTrackingEvent(order, 'Out for delivery');
        
        await this.delay(3000);
        order.status = 'delivered';
        this.addTrackingEvent(order, 'Order delivered successfully');
        
        this.saveOrders();
        notificationManager.showDeliveryNotification(order);
    }

    addTrackingEvent(order, event) {
        order.tracking.push({
            event,
            timestamp: new Date().toISOString()
        });
    }

    getOrders() {
        return this.orders;
    }

    getOrderById(id) {
        return this.orders.find(order => order.id === id);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===== PHARMACY SYSTEM =====

class PharmacySystem {
    constructor() {
        this.pharmacies = this.generatePharmacies();
        this.medicines = this.generateMedicines();
    }

    generatePharmacies() {
        return [
            {
                id: 'healthplus',
                name: 'HealthPlus Pharmacy',
                distance: 0.8,
                deliveryTime: 12,
                rating: 4.8,
                reviews: 1234,
                status: 'open',
                hours: 'Until 10 PM',
                features: ['Free delivery over $25', 'Prescription accepted']
            },
            {
                id: 'medcare',
                name: 'MedCare Express',
                distance: 1.2,
                deliveryTime: 15,
                rating: 4.6,
                reviews: 892,
                status: 'open',
                hours: '24 hours',
                features: ['Express delivery available', 'Prescription accepted']
            },
            {
                id: 'wellness',
                name: 'Wellness Center Pharmacy',
                distance: 1.5,
                deliveryTime: 20,
                rating: 4.9,
                reviews: 567,
                status: 'open',
                hours: 'Until 11 PM',
                features: ['10% off first order', 'Prescription accepted']
            }
        ];
    }

    generateMedicines() {
        return [
            { id: 'lisinopril', name: 'Lisinopril 10mg', category: 'prescription', price: 12.99, description: 'Blood pressure medication' },
            { id: 'vitamin-d', name: 'Vitamin D3 2000IU', category: 'vitamins', price: 8.99, description: 'Daily supplement' },
            { id: 'metformin', name: 'Metformin 500mg', category: 'prescription', price: 15.99, description: 'Diabetes medication' },
            { id: 'ibuprofen', name: 'Ibuprofen 200mg', category: 'otc', price: 6.99, description: 'Pain relief' },
            { id: 'atorvastatin', name: 'Atorvastatin 20mg', category: 'prescription', price: 18.99, description: 'Cholesterol medication' },
            { id: 'insulin', name: 'Insulin Pen', category: 'prescription', price: 45.99, description: 'Diabetes injection' },
            { id: 'albuterol', name: 'Albuterol Inhaler', category: 'prescription', price: 25.99, description: 'Asthma medication' },
            { id: 'sertraline', name: 'Sertraline 50mg', category: 'prescription', price: 22.99, description: 'Antidepressant' }
        ];
    }

    getPharmacies() {
        return this.pharmacies;
    }

    getMedicines() {
        return this.medicines;
    }

    getMedicinesByCategory(category) {
        return this.medicines.filter(medicine => medicine.category === category);
    }

    searchMedicines(query) {
        return this.medicines.filter(medicine => 
            medicine.name.toLowerCase().includes(query.toLowerCase()) ||
            medicine.description.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// ===== NOTIFICATION MANAGER =====

class NotificationManager {
    constructor() {
        this.notifications = [];
        this.permissions = this.checkPermissions();
    }

    checkPermissions() {
        if ('Notification' in window) {
            return Notification.permission;
        }
        return 'denied';
    }

    async requestPermission() {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            this.permissions = permission;
            return permission;
        }
        return 'denied';
    }

    start() {
        // Initialize periodic notifications
        this.schedulePeriodicNotifications();
    }

    schedulePeriodicNotifications() {
        // Weekly health report notification
        setInterval(() => {
            this.showWeeklyReportNotification();
        }, 7 * 24 * 60 * 60 * 1000); // 7 days

        // Daily medication reminders
        setInterval(() => {
            this.showMedicationReminders();
        }, 24 * 60 * 60 * 1000); // 24 hours

        // Morning vitals check
        setTimeout(() => {
            this.showMorningVitalsNotification();
        }, 8 * 60 * 60 * 1000); // 8 AM
    }

    showWeeklyReportNotification() {
        const notification = {
            id: Date.now(),
            type: 'weekly_report',
            title: 'Weekly Health Report Ready',
            message: 'Your weekly health summary is available. Tap to view trends and insights.',
            timestamp: new Date().toISOString(),
            actions: ['View Report', 'Share', 'Dismiss']
        };
        
        this.addNotification(notification);
        this.showSystemNotification(notification);
    }

    showMedicationReminders() {
        const medications = [
            { name: 'Lisinopril', time: 'Morning' },
            { name: 'Vitamin D3', time: 'Morning' }
        ];

        medications.forEach(med => {
            const notification = {
                id: Date.now() + Math.random(),
                type: 'medication_reminder',
                title: `${med.time} Medication Reminder`,
                message: `Time to take your ${med.name}`,
                timestamp: new Date().toISOString(),
                actions: ['Taken', 'Snooze 15min', 'Dismiss']
            };
            
            this.addNotification(notification);
            this.showSystemNotification(notification);
        });
    }

    showMorningVitalsNotification() {
        const notification = {
            id: Date.now(),
            type: 'vitals_check',
            title: 'Morning Vitals Check',
            message: 'Start your day by checking your vital signs',
            timestamp: new Date().toISOString(),
            actions: ['Check Vitals', 'Dismiss']
        };
        
        this.addNotification(notification);
    }

    showDeliveryNotification(order) {
        const notifications = [
            {
                id: Date.now(),
                type: 'delivery_confirmed',
                title: 'Order Confirmed',
                message: `Your order ${order.id} has been confirmed`,
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 1,
                type: 'delivery_assigned',
                title: 'Delivery Partner Assigned',
                message: `${order.deliveryPartner.name} is on the way`,
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 2,
                type: 'delivery_arriving',
                title: 'Delivery Arriving Soon',
                message: 'Your delivery will arrive in 2 minutes',
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 3,
                type: 'delivery_completed',
                title: 'Delivery Completed',
                message: 'Your order has been delivered successfully',
                timestamp: new Date().toISOString()
            }
        ];

        notifications.forEach((notification, index) => {
            setTimeout(() => {
                this.addNotification(notification);
                this.showSystemNotification(notification);
            }, index * 5000); // Stagger notifications
        });
    }

    addNotification(notification) {
        this.notifications.push(notification);
        this.saveNotifications();
    }

    showSystemNotification(notification) {
        if (this.permissions === 'granted') {
            const systemNotification = new Notification(notification.title, {
                body: notification.message,
                icon: '/favicon.ico',
                tag: notification.type
            });

            systemNotification.onclick = () => {
                window.focus();
                systemNotification.close();
                this.handleNotificationClick(notification);
            };
        }
    }

    handleNotificationClick(notification) {
        switch (notification.type) {
            case 'weekly_report':
                window.location.href = 'health.html';
                break;
            case 'medication_reminder':
                // Handle medication reminder actions
                break;
            case 'delivery_arriving':
                // Show delivery tracking
                break;
        }
    }

    saveNotifications() {
        localStorage.setItem('healthy_nation_notifications', JSON.stringify(this.notifications));
    }

    getNotifications() {
        return this.notifications;
    }

    clearNotifications() {
        this.notifications = [];
        this.saveNotifications();
    }
}

// ===== PAYMENT SYSTEM =====

class PaymentSystem {
    constructor(backend) {
        this.backend = backend;
        this.paymentMethods = {
            upi: { name: 'UPI Payment', enabled: true },
            card: { name: 'Credit/Debit Card', enabled: true },
            wallet: { name: 'Wallet', enabled: true },
            insurance: { name: 'Insurance', enabled: true },
            healthScheme: { name: 'Health Scheme', enabled: true },
            cod: { name: 'Cash on Delivery', enabled: true }
        };
        this.transactionHistory = this.loadTransactionHistory();
    }

    processPayment(amount, method, details) {
        return new Promise((resolve, reject) => {
            // Simulate payment processing delay
            setTimeout(() => {
                const transaction = {
                    id: 'TXN_' + Date.now(),
                    amount: amount,
                    method: method,
                    details: details,
                    timestamp: new Date().toISOString(),
                    status: 'success'
                };

                // Simulate different success/failure rates
                const successRate = this.getSuccessRate(method);
                if (Math.random() > successRate) {
                    transaction.status = 'failed';
                    reject(new Error('Payment failed. Please try again.'));
                    return;
                }

                this.saveTransaction(transaction);
                resolve(transaction);
            }, 2000 + Math.random() * 1000); // 2-3 seconds
        });
    }

    getSuccessRate(method) {
        // Simulate different success rates for different payment methods
        const rates = {
            upi: 0.95,
            card: 0.98,
            wallet: 0.99,
            insurance: 0.90,
            healthScheme: 0.85,
            cod: 1.0
        };
        return rates[method] || 0.95;
    }

    validatePaymentDetails(method, details) {
        switch (method) {
            case 'upi':
                return this.validateUPI(details.upiId);
            case 'card':
                return this.validateCard(details);
            case 'wallet':
                return this.validateWallet(details.amount);
            case 'insurance':
                return this.validateInsurance(details.insuranceId);
            case 'healthScheme':
                return this.validateHealthScheme(details.schemeId);
            case 'cod':
                return { valid: true };
            default:
                return { valid: false, error: 'Invalid payment method' };
        }
    }

    validateUPI(upiId) {
        const upiRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+$/;
        if (!upiId || !upiRegex.test(upiId)) {
            return { valid: false, error: 'Invalid UPI ID format' };
        }
        return { valid: true };
    }

    validateCard(cardDetails) {
        const { cardNumber, expiryDate, cvv } = cardDetails;
        
        if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
            return { valid: false, error: 'Invalid card number' };
        }
        
        if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
            return { valid: false, error: 'Invalid expiry date' };
        }
        
        if (!cvv || cvv.length < 3) {
            return { valid: false, error: 'Invalid CVV' };
        }
        
        return { valid: true };
    }

    validateWallet(amount) {
        const walletBalance = this.getWalletBalance();
        if (amount > walletBalance) {
            return { valid: false, error: 'Insufficient wallet balance' };
        }
        return { valid: true };
    }

    validateInsurance(insuranceId) {
        if (!insuranceId || insuranceId.length < 5) {
            return { valid: false, error: 'Invalid insurance ID' };
        }
        return { valid: true };
    }

    validateHealthScheme(schemeId) {
        if (!schemeId || schemeId.length < 5) {
            return { valid: false, error: 'Invalid health scheme ID' };
        }
        return { valid: true };
    }

    getWalletBalance() {
        // Get wallet balance from localStorage or default
        const balance = localStorage.getItem('healthy_nation_wallet_balance');
        return balance ? parseFloat(balance) : 50.00;
    }

    updateWalletBalance(amount) {
        const currentBalance = this.getWalletBalance();
        const newBalance = currentBalance - amount;
        localStorage.setItem('healthy_nation_wallet_balance', newBalance.toFixed(2));
        return newBalance;
    }

    saveTransaction(transaction) {
        this.transactionHistory.push(transaction);
        localStorage.setItem('healthy_nation_transactions', JSON.stringify(this.transactionHistory));
    }

    loadTransactionHistory() {
        const saved = localStorage.getItem('healthy_nation_transactions');
        return saved ? JSON.parse(saved) : [];
    }

    getTransactionHistory(limit = 10) {
        return this.transactionHistory.slice(-limit);
    }

    generateReceipt(transactionId) {
        const transaction = this.transactionHistory.find(t => t.id === transactionId);
        if (!transaction) return null;

        return {
            transactionId: transaction.id,
            date: new Date(transaction.timestamp).toLocaleDateString(),
            time: new Date(transaction.timestamp).toLocaleTimeString(),
            amount: transaction.amount,
            method: this.paymentMethods[transaction.method].name,
            status: transaction.status,
            items: transaction.details.items || [],
            pharmacy: transaction.details.pharmacy || 'HealthPlus Pharmacy'
        };
    }

    exportTransactionData(format = 'json') {
        const data = {
            transactions: this.transactionHistory,
            exportDate: new Date().toISOString(),
            totalTransactions: this.transactionHistory.length,
            totalAmount: this.transactionHistory.reduce((sum, t) => sum + t.amount, 0)
        };

        if (format === 'json') {
            return JSON.stringify(data, null, 2);
        } else if (format === 'csv') {
            const headers = ['Transaction ID', 'Date', 'Amount', 'Method', 'Status'];
            const rows = this.transactionHistory.map(t => [
                t.id,
                new Date(t.timestamp).toLocaleDateString(),
                t.amount,
                this.paymentMethods[t.method].name,
                t.status
            ]);
            return [headers, ...rows].map(row => row.join(',')).join('\n');
        }
    }
}

// ===== DELIVERY SYSTEM =====

class DeliverySystem {
    constructor(backend) {
        this.backend = backend;
        this.activeOrders = this.loadActiveOrders();
        this.orderHistory = this.loadOrderHistory();
    }

    createOrder(items, pharmacy, paymentMethod) {
        const order = {
            id: 'ORD_' + Date.now(),
            items: items,
            pharmacy: pharmacy,
            paymentMethod: paymentMethod,
            status: 'confirmed',
            timestamp: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes
            tracking: []
        };

        this.activeOrders.push(order);
        this.saveActiveOrders();
        
        // Start delivery simulation
        this.simulateDelivery(order.id);
        
        return order;
    }

    simulateDelivery(orderId) {
        const statuses = [
            { status: 'preparing', delay: 5 * 60 * 1000 }, // 5 minutes
            { status: 'ready', delay: 10 * 60 * 1000 }, // 10 minutes
            { status: 'dispatched', delay: 15 * 60 * 1000 }, // 15 minutes
            { status: 'in_transit', delay: 20 * 60 * 1000 }, // 20 minutes
            { status: 'delivered', delay: 30 * 60 * 1000 } // 30 minutes
        ];

        statuses.forEach((stage, index) => {
            setTimeout(() => {
                this.updateOrderStatus(orderId, stage.status);
                
                if (stage.status === 'delivered') {
                    this.completeOrder(orderId);
                }
            }, stage.delay);
        });
    }

    updateOrderStatus(orderId, status) {
        const order = this.activeOrders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            order.tracking.push({
                status: status,
                timestamp: new Date().toISOString(),
                location: this.getDeliveryLocation(status)
            });
            this.saveActiveOrders();
            
            // Send notification
            this.sendDeliveryNotification(orderId, status);
        }
    }

    getDeliveryLocation(status) {
        const locations = {
            preparing: 'Pharmacy',
            ready: 'Pharmacy',
            dispatched: 'On the way',
            in_transit: 'Near your location',
            delivered: 'Delivered'
        };
        return locations[status] || 'Unknown';
    }

    sendDeliveryNotification(orderId, status) {
        const messages = {
            preparing: 'Your order is being prepared',
            ready: 'Your order is ready for dispatch',
            dispatched: 'Your order has been dispatched',
            in_transit: 'Your order is out for delivery',
            delivered: 'Your order has been delivered'
        };

        if (messages[status]) {
            notificationSystem.show(messages[status], 'info', 5000);
        }
    }

    completeOrder(orderId) {
        const orderIndex = this.activeOrders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            const order = this.activeOrders[orderIndex];
            this.orderHistory.push(order);
            this.activeOrders.splice(orderIndex, 1);
            
            this.saveActiveOrders();
            this.saveOrderHistory();
        }
    }

    getOrderStatus(orderId) {
        return this.activeOrders.find(o => o.id === orderId) || 
               this.orderHistory.find(o => o.id === orderId);
    }

    getTrackingInfo(orderId) {
        const order = this.getOrderStatus(orderId);
        if (!order) return null;

        return {
            orderId: order.id,
            status: order.status,
            estimatedDelivery: order.estimatedDelivery,
            tracking: order.tracking,
            currentLocation: this.getCurrentLocation(order.status)
        };
    }

    getCurrentLocation(status) {
        const locations = {
            preparing: 'At pharmacy, being prepared',
            ready: 'At pharmacy, ready to dispatch',
            dispatched: 'Dispatched from pharmacy',
            in_transit: 'Out for delivery',
            delivered: 'Delivered to customer'
        };
        return locations[status] || 'Status unknown';
    }

    cancelOrder(orderId) {
        const orderIndex = this.activeOrders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            this.activeOrders.splice(orderIndex, 1);
            this.saveActiveOrders();
            notificationSystem.show('Order cancelled successfully', 'success');
            return true;
        }
        return false;
    }

    loadActiveOrders() {
        const saved = localStorage.getItem('healthy_nation_active_orders');
        return saved ? JSON.parse(saved) : [];
    }

    saveActiveOrders() {
        localStorage.setItem('healthy_nation_active_orders', JSON.stringify(this.activeOrders));
    }

    loadOrderHistory() {
        const saved = localStorage.getItem('healthy_nation_order_history');
        return saved ? JSON.parse(saved) : [];
    }

    saveOrderHistory() {
        localStorage.setItem('healthy_nation_order_history', JSON.stringify(this.orderHistory));
    }
}

// ===== PHARMACY SYSTEM =====

class PharmacySystem {
    constructor(backend) {
        this.backend = backend;
        this.pharmacies = this.loadPharmacies();
        this.medicines = this.loadMedicines();
    }

    loadPharmacies() {
        return [
            {
                id: 'healthplus',
                name: 'HealthPlus Pharmacy',
                rating: 4.8,
                reviews: 1234,
                distance: 0.8,
                deliveryTime: '12-15 min',
                status: 'open',
                hours: '8:00 AM - 10:00 PM',
                phone: '+1-555-0123',
                address: '123 Main St, Downtown',
                acceptsPrescription: true,
                freeDeliveryThreshold: 25,
                specialties: ['Prescription', 'OTC', 'Vitamins']
            },
            {
                id: 'medcare',
                name: 'MedCare Express',
                rating: 4.6,
                reviews: 892,
                distance: 1.2,
                deliveryTime: '8-12 min',
                status: 'open',
                hours: '24 hours',
                phone: '+1-555-0456',
                address: '456 Oak Ave, Midtown',
                acceptsPrescription: true,
                freeDeliveryThreshold: 30,
                specialties: ['Express Delivery', 'Emergency', 'Prescription']
            },
            {
                id: 'wellness',
                name: 'Wellness Center Pharmacy',
                rating: 4.7,
                reviews: 567,
                distance: 2.1,
                deliveryTime: '20-25 min',
                status: 'open',
                hours: '9:00 AM - 9:00 PM',
                phone: '+1-555-0789',
                address: '789 Pine St, Uptown',
                acceptsPrescription: true,
                freeDeliveryThreshold: 20,
                specialties: ['Organic', 'Supplements', 'Homeopathy']
            }
        ];
    }

    loadMedicines() {
        return [
            {
                id: 'lisinopril',
                name: 'Lisinopril 10mg',
                category: 'prescription',
                price: 12.99,
                description: 'Blood pressure medication',
                requiresPrescription: true,
                inStock: true,
                manufacturer: 'Pfizer'
            },
            {
                id: 'vitamin-d',
                name: 'Vitamin D3 2000IU',
                category: 'vitamins',
                price: 8.99,
                description: 'Daily supplement',
                requiresPrescription: false,
                inStock: true,
                manufacturer: 'Nature Made'
            },
            {
                id: 'metformin',
                name: 'Metformin 500mg',
                category: 'prescription',
                price: 15.99,
                description: 'Diabetes medication',
                requiresPrescription: true,
                inStock: true,
                manufacturer: 'Bristol Myers'
            },
            {
                id: 'ibuprofen',
                name: 'Ibuprofen 200mg',
                category: 'otc',
                price: 6.99,
                description: 'Pain relief',
                requiresPrescription: false,
                inStock: true,
                manufacturer: 'Advil'
            }
        ];
    }

    searchPharmacies(location, radius = 5) {
        // Simulate location-based search
        return this.pharmacies.filter(pharmacy => pharmacy.distance <= radius);
    }

    searchMedicines(query) {
        const lowercaseQuery = query.toLowerCase();
        return this.medicines.filter(medicine => 
            medicine.name.toLowerCase().includes(lowercaseQuery) ||
            medicine.description.toLowerCase().includes(lowercaseQuery) ||
            medicine.category.toLowerCase().includes(lowercaseQuery)
        );
    }

    getPharmacyDetails(pharmacyId) {
        return this.pharmacies.find(p => p.id === pharmacyId);
    }

    getMedicineDetails(medicineId) {
        return this.medicines.find(m => m.id === medicineId);
    }

    checkAvailability(pharmacyId, medicineId) {
        // Simulate availability check
        const medicine = this.getMedicineDetails(medicineId);
        return medicine && medicine.inStock;
    }

    getPrescriptionUploadUrl(pharmacyId) {
        // Simulate prescription upload
        return `https://api.healthynation.com/upload-prescription/${pharmacyId}`;
    }

    validatePrescription(file) {
        // Simulate prescription validation
        const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            return { valid: false, error: 'Invalid file type' };
        }
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            return { valid: false, error: 'File size too large' };
        }
        return { valid: true };
    }
}

// ===== NOTIFICATION MANAGER =====

class NotificationManager {
    constructor() {
        this.notifications = this.loadNotifications();
        this.permission = this.checkPermission();
    }

    checkPermission() {
        if ('Notification' in window) {
            return Notification.permission;
        }
        return 'denied';
    }

    async requestPermission() {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            this.permission = permission;
            return permission === 'granted';
        }
        return false;
    }

    showSystemNotification(title, options = {}) {
        if (this.permission === 'granted') {
            const notification = new Notification(title, {
                icon: '/favicon.ico',
                badge: '/favicon.ico',
                ...options
            });

            // Auto close after 5 seconds
            setTimeout(() => notification.close(), 5000);
            return notification;
        }
        return null;
    }

    scheduleNotification(title, options, delay) {
        setTimeout(() => {
            this.showSystemNotification(title, options);
        }, delay);
    }

    loadNotifications() {
        const saved = localStorage.getItem('healthy_nation_notifications');
        return saved ? JSON.parse(saved) : [];
    }

    saveNotifications() {
        localStorage.setItem('healthy_nation_notifications', JSON.stringify(this.notifications));
    }

    addNotification(type, title, message, action = null) {
        const notification = {
            id: Date.now().toString(),
            type: type,
            title: title,
            message: message,
            timestamp: new Date().toISOString(),
            read: false,
            action: action
        };

        this.notifications.unshift(notification);
        this.saveNotifications();

        // Show system notification for important alerts
        if (type === 'critical' || type === 'emergency') {
            this.showSystemNotification(title, {
                body: message,
                requireInteraction: true
            });
        }

        return notification;
    }

    markAsRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
            notification.read = true;
            this.saveNotifications();
        }
    }

    markAllAsRead() {
        this.notifications.forEach(n => n.read = true);
        this.saveNotifications();
    }

    getUnreadCount() {
        return this.notifications.filter(n => !n.read).length;
    }

    clearOldNotifications(days = 7) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        
        this.notifications = this.notifications.filter(n => 
            new Date(n.timestamp) > cutoffDate
        );
        this.saveNotifications();
    }
}

// Export for global access
window.backend = backend;
window.animationController = animationController;
window.notificationSystem = notificationSystem;
window.vitalSignsMonitor = vitalSignsMonitor;
window.emergencySystem = emergencySystem;
window.aiAssistant = aiAssistant;
window.paymentSystem = paymentSystem;
window.deliverySystem = deliverySystem;
window.pharmacySystem = pharmacySystem;
window.notificationManager = notificationManager;